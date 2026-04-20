-- CreateEnum
CREATE TYPE "Role" AS ENUM ('PLAYER', 'DEVELOPER', 'ADMIN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'PLAYER';
