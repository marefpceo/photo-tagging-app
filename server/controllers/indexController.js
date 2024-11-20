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
      id: 'current_game_data',
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
        id: 'current_game_data',
      },
      data: {
        foundCharacters: {
          push: parseInt(req.body.characterId),
        },
      },
    });

    if (gameData.characterCount === gameData.foundCharacters.length + 1) {
      await prisma.data.update({
        where: {
          id: 'current_game_data',
        },
        data: {
          stopTime: DateTime.now().toISO(),
        },
      });

      res.json({
        message: 'You Win',
        start: gameData.startTime,
        finihed: gameData.stopTime,
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
exports.game_image_put = asyncHandler(async (req, res, next) => {
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

  const dataUpdate = await prisma.data.update({
    where: {
      id: 'current_game_data',
    },
    data: {
      startTime: DateTime.now().toISO(),
      imageId: parseInt(req.params.gameImageId),
      characterCount: currentGameImage._count.characters,
    },
  });

  res.json({
    message: 'Game started at: ' + dataUpdate.startTime,
    currentGameImage: currentGameImage.id,
  });
});
