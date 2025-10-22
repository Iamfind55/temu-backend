// import { MigrationInterface, QueryRunner } from "typeorm";

// export class AddForeignKeyToTransactionHistory1699999999995
//   implements MigrationInterface
// {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     // Step 1: Add new columns with the correct data type (UUID)
//     await queryRunner.query(`
//         ALTER TABLE "order_detail"
//         ADD COLUMN "customer_id_temp" UUID;
//     `);
//     await queryRunner.query(`
//         ALTER TABLE "order_detail"
//         ADD COLUMN "shop_id_temp" UUID;
//     `);

//     // Step 2: Copy existing data into new columns
//     await queryRunner.query(`
//         UPDATE "order_detail"
//         SET "customer_id_temp" = CAST("customer_id" AS UUID);
//     `);
//     await queryRunner.query(`
//         UPDATE "order_detail"
//         SET "shop_id_temp" = CAST("shop_id" AS UUID);
//     `);

//     // Step 3: Drop foreign key constraints on old columns
//     await queryRunner.query(`
//         ALTER TABLE "order_detail"
//         DROP CONSTRAINT IF EXISTS "FK_order_detail_customer_id";
//     `);
//     await queryRunner.query(`
//         ALTER TABLE "order_detail"
//         DROP CONSTRAINT IF EXISTS "FK_order_detail_shop_id";
//     `);

//     // Step 4: Drop the old columns
//     await queryRunner.query(`
//         ALTER TABLE "order_detail"
//         DROP COLUMN "customer_id";
//     `);
//     await queryRunner.query(`
//         ALTER TABLE "order_detail"
//         DROP COLUMN "shop_id";
//     `);

//     // Step 5: Rename new columns to original names
//     await queryRunner.query(`
//         ALTER TABLE "order_detail"
//         RENAME COLUMN "customer_id_temp" TO "customer_id";
//     `);
//     await queryRunner.query(`
//         ALTER TABLE "order_detail"
//         RENAME COLUMN "shop_id_temp" TO "shop_id";
//     `);

//     // Step 6: Add foreign key constraints back
//     await queryRunner.query(`
//         ALTER TABLE "order_detail"
//         ADD CONSTRAINT "FK_order_detail_customer_id"
//         FOREIGN KEY ("customer_id") REFERENCES "customer"("id")
//         ON DELETE SET NULL;
//     `);
//     await queryRunner.query(`
//         ALTER TABLE "order_detail"
//         ADD CONSTRAINT "FK_order_detail_shop_id"
//         FOREIGN KEY ("shop_id") REFERENCES "shop"("id")
//         ON DELETE SET NULL;
//     `);
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     // Reverse migration
//   }
// }
