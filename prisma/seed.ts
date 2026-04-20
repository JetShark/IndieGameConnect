import { PrismaClient, Role, PaidTier, CampaignStatus } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed for IndieGameConnect...');

  const hashedPassword = await bcrypt.hash('password123', 10);

  // Create sample developer
  const dev = await prisma.user.upsert({
    where: { email: 'dev@indie.com' },
    update: {},
    create: {
      email: 'dev@indie.com',
      password: hashedPassword,
      firstName: 'Indie',
      lastName: 'Dev',
      role: Role.DEVELOPER,
      paidTier: PaidTier.PRO,
      isVerified: true,
    },
  });
  console.log('✅ Created developer:', dev.email);

  // Create sample player
  const player = await prisma.user.upsert({
    where: { email: 'player@gamer.com' },
    update: {},
    create: {
      email: 'player@gamer.com',
      password: hashedPassword,
      firstName: 'Pro',
      lastName: 'Gamer',
      role: Role.PLAYER,
      isVerified: true,
    },
  });
  console.log('✅ Created player:', player.email);

  console.log('🎉 Database seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
