import { PrismaClient } from '@prisma/client';
// import { randomUUID } from 'crypto';

const prisma = new PrismaClient();

async function main() {
  // Upsert user Alice
  const alice = await prisma.userTest.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      // firstName: 'Alice',
      // lastName: 'Wonderland',
      name: 'Alice',
      email: 'alice@prisma.io',
      // passwordHash: randomUUID(),
      // phoneNumber: '+14784874589',
      // billingAddress: {
      //   create: {
      //     streetAddress: 'Silver Gould St #8914',
      //     city: 'Cayenne',
      //     state: 'Wyoming',
      //     zipCode: '82801',
      //     country: 'US',
      //   },
    },
  });
  // Upsert user Steve
  const steve = await prisma.userTest.upsert({
    where: { email: 'steve@prisma.io' },
    update: {},
    create: {
      // firstName: 'Steve',
      // lastName: 'Wonderland',
      name: 'Steve',
      email: 'steve@prisma.io',
      // passwordHash: randomUUID(),
      // phoneNumber: '+14784874589',
      // billingAddress: {
      //   create: {
      //     streetAddress: 'Silver Gould St #8914',
      //     city: 'Cayenne',
      //     state: 'Wyoming',
      //     zipCode: '82801',
      //     country: 'US',
      //   },
    },
  });
  // Upsert user Tyler
  const tyler = await prisma.userTest.upsert({
    where: { email: 'tyler@prisma.io' },
    update: {},
    create: {
      // firstName: 'Tyler',
      // lastName: 'Wonderland',
      name: 'Tyler',
      email: 'tyler@prisma.io',
      // passwordHash: randomUUID(),
      // phoneNumber: '+14784874589',
      // billingAddress: {
      //   create: {
      //     streetAddress: 'Silver Gould St #8914',
      //     city: 'Cayenne',
      //     state: 'Wyoming',
      //     zipCode: '82801',
      //     country: 'US',
      //   },
    },
  });
  // Upsert user Ron
  const ron = await prisma.userTest.upsert({
    where: { email: 'ron@prisma.io' },
    update: {},
    create: {
      // firstName: 'Ron',
      // lastName: 'Wonderland',
      name: 'Ron',
      email: 'ron@prisma.io',
      // passwordHash: randomUUID(),
      // phoneNumber: '+14784874589',
      // billingAddress: {
      //   create: {
      //     streetAddress: 'Silver Gould St #8914',
      //     city: 'Cayenne',
      //     state: 'Wyoming',
      //     zipCode: '82801',
      //     country: 'US',
      //   },
    },
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
