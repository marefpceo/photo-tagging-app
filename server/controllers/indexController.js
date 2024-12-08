const asyncHandler = require('express-async-handler');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { DateTime } = require('luxon');

// Return all image game images
exports.image_list_get = asyncHandler(async (req, res, next) => {
  const image_list = await prisma.game_image.findMany({
    include: {
      characters: true,
      game_leaders: true,
    },
  });

  res.json({
    image_list,
  });
});

// Handles ending the game when the user quits or exits
exports.quit_game_put = asyncHandler(async (req, res, next) => {
  await prisma.data.update({
    where: {
      id: 'current_game_data',
    },
    data: {
      startTime: null,
      stopTime: null,
      imageId: null,
      characterCount: null,
      foundCharacters: {
        set: [],
      },
    },
  });
  res.json({
    message: 'Gamed ended',
  });
});

// Verify if selected coordinates match with characters
exports.check_selection = asyncHandler(async (req, res, next) => {
  const characterInfo = await prisma.character.findUnique({
    where: {
      id: parseInt(req.body.characterId),
    },
  });

  const gameData = await prisma.data.findUnique({
    where: {
      user_id: req.session.id,
    },
  });

  const checkRange = Math.floor(
    Math.sqrt(
      (req.body.xCoord - characterInfo.xCoordinate) ** 2 +
        (req.body.yCoord - characterInfo.yCoordinate) ** 2,
    ),
  );

  const duplicateFinds = gameData.foundCharacters.includes(
    parseInt(req.body.characterId),
  );

  if (checkRange > 30 || duplicateFinds === true) {
    res.json({
      message: 'Incorrect selection',
    });
  } else {
    const updateFoundCharacter = await prisma.data.update({
      where: {
        user_id: req.session.id,
      },
      data: {
        foundCharacters: {
          push: parseInt(req.body.characterId),
        },
      },
    });

    if (gameData.characterCount === gameData.foundCharacters.length + 1) {
      const updateGame = await prisma.data.update({
        where: {
          user_id: req.session.id,
        },
        data: {
          stopTime: DateTime.now().toISO(),
        },
      });

      let gameStart = DateTime.fromJSDate(gameData.startTime);
      let gameEnd = DateTime.fromJSDate(updateGame.stopTime);
      const totalTime = gameEnd
        .diff(gameStart, ['minutes', 'seconds'])
        .toObject();

      console.log(gameStart, gameEnd);

      res.json({
        message: 'You Win',
        start: gameData.startTime,
        finished: updateGame.stopTime,
        elapsed_time: totalTime,
      });
    } else {
      res.json({
        message: 'Check coordinates for match',
        characterInfo,
        checkRange,
        input: {
          characterId: req.body.characterId,
          xCoord: req.body.xCoord,
          yCoord: req.body.yCoord,
        },
        updateFoundCharacter,
      });
    }
  }
});

// Return selected game image
exports.game_image_get = asyncHandler(async (req, res, next) => {
  const game_image = await prisma.game_image.findUnique({
    where: {
      id: parseInt(req.params.gameImageId),
    },
    include: {
      characters: true,
      game_leaders: true,
    },
  });

  res.json({
    game_image,
  });
});

// Initializes and starts game
exports.game_image_post = asyncHandler(async (req, res, next) => {
  const sessionId = req.session.id;
  const currentGameImage = await prisma.game_image.findUnique({
    where: {
      id: parseInt(req.params.gameImageId),
    },
    include: {
      _count: {
        select: { characters: true },
      },
    },
  });

  const userDataCreate = await prisma.data.create({
    data: {
      user_id: sessionId,
      startTime: DateTime.now().toISO(),
      imageId: parseInt(req.params.gameImageId),
      characterCount: currentGameImage._count.characters,
    },
  });

  console.log(req.session.id);
  res.json({
    message: 'Game started at: ' + userDataCreate.startTime,
    currentGameImage: currentGameImage.id,
  });
});
