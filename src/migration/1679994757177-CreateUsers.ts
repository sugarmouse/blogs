import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1679994757177 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                { name: 'id', type: 'int', isGenerated: true, isPrimary: true, },
                { name: 'username', type: 'varchar' },
                { name: 'password_digest', type: 'varchar' },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
