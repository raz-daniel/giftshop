import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import TargetMarket from "./target-market";


@Table({
    underscored: true
})

export default class Present extends Model {
    //primary key
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    //popular columns
    @ForeignKey(() => TargetMarket)
    @Column(DataType.UUID)
    categoryId: string
    
    @AllowNull(false)
    @Column(DataType.STRING(40))
    name: string

    @AllowNull(false)
    @Column(DataType.TEXT)
    description: string

    @AllowNull(false)
    @Column(DataType.DECIMAL(10, 2))
    price: number

    @AllowNull(false)
    @Column(DataType.DECIMAL(10, 2))
    discount: number

    //relationships
    @BelongsTo(() => TargetMarket)
    category: TargetMarket
}