import { MigrationInterface, QueryRunner } from 'typeorm';

export class product1619049217277 implements MigrationInterface {
  name = 'product1619049217277';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `product` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `category` varchar(255) NOT NULL, `price` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `product`');
  }
}
