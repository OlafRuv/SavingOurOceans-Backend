const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const user1 = await prisma.user.upsert({
      where: { email: 'correo1@correo.mx' },
      update: {},
      create: {
        name: 'name1',
        lastname: "lastname1",
        email: "correo1@correo.mx",
        password: "1234",
        points: 0,
        country: "mexico",
        state: "chihuahua"
      },
    });
    const user2 = await prisma.user.upsert({
      where: { email: 'correo2@correo.mx' },
      update: {},
      create: {
        name: 'name2',
        lastname: "lastname2",
        email: "correo2@correo.mx",
        password: "62892",
        points: 0,
        country: "mexico",
        state: "cdmx"
      },
    });
    const user3 = await prisma.user.upsert({
      where: { email: 'correo3@correo.mx' },
      update: {},
      create: {
        name: 'name3',
        lastname: "lastname3",
        email: "correo3@correo.mx",
        password: "6548",
        points: 0,
        country: "mexico",
        state: "puebla"
      },
    });


    console.log('Create users');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();