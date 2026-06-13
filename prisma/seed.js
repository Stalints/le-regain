const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL || 'admin@regainpmr.com';
  const password = process.env.ADMIN_PASSWORD || 'AdminRegain2026!';

  console.log(`Seeding admin user: ${email}...`);

  const passwordHash = await bcrypt.hash(password, 10);

  const admin = await prisma.user.upsert({
    where: { email: email.toLowerCase() },
    update: { passwordHash },
    create: {
      email: email.toLowerCase(),
      passwordHash,
    },
  });

  console.log(`\n========================================`);
  console.log(`Admin user seeded successfully!`);
  console.log(`ID: ${admin.id}`);
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  console.log(`========================================\n`);
  console.log(`Please use these credentials to log into the admin dashboard.`);
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
