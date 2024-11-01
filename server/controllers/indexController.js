const asyncHandler = require('express-async-handler');

exports.image_list_get = asyncHandler(async (req, res, next) => {
  res.json({
    image_list: 'Image List',
  });
});