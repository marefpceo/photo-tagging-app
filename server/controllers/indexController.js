const asyncHandler = require('express-async-handler');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Return all image game images
exports.image_list_get = asyncHandler(async (req, res, next) => {
  const image_list = await prisma.game_image.findMany({
    include: {
      characters: true,
      game_leaders: true,
    }
  });
  res.json({
    image_list
  });
});