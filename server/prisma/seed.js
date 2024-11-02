const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const waldo = await prisma.character.upsert({
    where: {
      id: 1,
    }, 
    update: {},
    create: {
      character_name: 'Waldo',
      icon_location: 'images/waldo.jpg',
      xCoordinate: 1856,
      yCoordinate: 749, 
      imageId: 1
    }
  });

  const odlaw = await prisma.character.upsert({
    where: {
      id: 2,
    },
    update: {},
    create: {
      character_name: 'Odlaw',
      icon_location: 'images/odlaw.jpg',
      xCoordinate: 1676,
      yCoordinate: 781,
      imageId: 1
    }
  });

  const beach_waldo = await prisma.game_image.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      image_location: 'images/beach_waldo.jpeg',
      title: 'Beach',
      width: 3000,
      height: 1926
    }
  });
  console.log({
    waldo,
    odlaw,
    beach_waldo
  });
};

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })