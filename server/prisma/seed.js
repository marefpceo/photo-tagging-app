const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
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
  console.log({beach_waldo});
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