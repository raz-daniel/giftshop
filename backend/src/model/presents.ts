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
    @ForeignKey(() => Present)
    @Column(DataType.UUID)
    categoryId: string
    
    @AllowNull(false)
    @Column(DataType.STRING(40))
    name: string

    @AllowNull(false)
    @Column(DataType.TEXT)
    description: string

    @AllowNull(false)
    @Column(DataType.NUMBER)
    price: number

    @AllowNull(false)
    @Column(DataType.NUMBER)
    discount: number

    //relationships
    @BelongsTo(() => TargetMarket)
    category: TargetMarket
}