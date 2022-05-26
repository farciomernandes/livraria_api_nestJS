import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    tableName: 'livros'
})
export class Livros extends Model{
    @Column({
        type: DataType.STRING(60),
        allowNull: false,
    })
    codigo: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    nome: string;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
    })
    preco: number;
}