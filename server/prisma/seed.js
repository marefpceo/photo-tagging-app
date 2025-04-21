const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const beach_waldo = await prisma.game_image.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      image_location: '/images/beach_waldo.jpeg',
      title: 'Beach',
      width: 3000,
      height: 1926,
    },
  });

  // Beach gameboard and characters
  const waldo = await prisma.character.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      character_name: 'Waldo',
      icon_location: '/images/waldo.jpg',
      xCoordinate: 1856,
      yCoordinate: 749,
      imageId: 1,
    },
  });

  const odlaw = await prisma.character.upsert({
    where: {
      id: 2,
    },
    update: {},
    create: {
      character_name: 'Odlaw',
      icon_location: '/images/odlaw.jpg',
      xCoordinate: 325,
      yCoordinate: 680,
      imageId: 1,
    },
  });

  // Department store Game board and characters
  const store_waldo = await prisma.game_image.upsert({
    where: {
      id: 2,
    },
    update: {},
    create: {
      image_location: '/images/department_store_waldo.jpg',
      title: 'Department Store',
      width: 2800,
      height: 1760,
    },
  });

  const waldo2 = await prisma.character.upsert({
    where: {
      id: 3,
    },
    update: {},
    create: {
      character_name: 'Waldo',
      icon_location: '/images/waldo.jpg',
      xCoordinate: 1179,
      yCoordinate: 309,
      imageId: 2,
    },
  });

  const odlaw2 = await prisma.character.upsert({
    where: {
      id: 4,
    },
    update: {},
    create: {
      character_name: 'Odlaw',
      icon_location: '/images/odlaw.jpg',
      xCoordinate: 555,
      yCoordinate: 1275,
      imageId: 2,
    },
  });

  const wenda = await prisma.character.upsert({
    where: {
      id: 5,
    },
    update: {},
    create: {
      character_name: 'Wenda',
      icon_location: '/images/wenda.jpg',
      xCoordinate: 840,
      yCoordinate: 1290,
      imageId: 2,
    },
  });

  // Snow mountain gameboard and characters
  const snow_mountain_waldo = await prisma.game_image.upsert({
    where: {
      id: 3,
    },
    update: {},
    create: {
      image_location: '/images/snow_mountain_waldo.jpeg',
      title: 'Snow Mountain',
      width: 3000,
      height: 1902,
    },
  });

  const wizard = await prisma.character.upsert({
    where: {
      id: 6,
    },
    update: {},
    create: {
      character_name: 'Wizard Whitebeard',
      icon_location: '/images/wizard_whitebeard.jpg',
      xCoordinate: 206,
      yCoordinate: 1437,
      imageId: 3,
    },
  });

  const waldo3 = await prisma.character.upsert({
    where: {
      id: 7,
    },
    update: {},
    create: {
      character_name: 'Waldo',
      icon_location: '/images/waldo.jpg',
      xCoordinate: 2565,
      yCoordinate: 1380,
      imageId: 3,
    },
  });

  const wenda2 = await prisma.character.upsert({
    where: {
      id: 8,
    },
    update: {},
    create: {
      character_name: 'Wenda',
      icon_location: '/images/wenda.jpg',
      xCoordinate: 1470,
      yCoordinate: 790,
      imageId: 3,
    },
  });

  const odlaw3 = await prisma.character.upsert({
    where: {
      id: 9,
    },
    update: {},
    create: {
      character_name: 'Odlaw',
      icon_location: '/images/odlaw.jpg',
      xCoordinate: 955,
      yCoordinate: 1215,
      imageId: 3,
    },
  });

  console.log({
    waldo,
    odlaw,
    beach_waldo,
    store_waldo,
    waldo2,
    odlaw2,
    wenda,
    snow_mountain_waldo,
    wizard,
    wenda2,
    odlaw3,
    waldo3,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
