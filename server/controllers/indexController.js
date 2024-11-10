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
    currentGameImage: currentGameImage._count.characters,
  });
});

// Verify if selected coordinates match with characters
exports.game_image_post = asyncHandler(async (req, res, next) => {
  res.json({
    message: 'Check coordinates for match',
  });
});
