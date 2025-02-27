import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Present from "./presents";



@Table({
    underscored: true
})

export default class TargetMarket extends Model {
    //primary key
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    //popular columns
    @AllowNull(false)
    @Column(DataType.STRING(40))
    category: string

    //relationships
    @HasMany(() => Present)
    present: Present[]

}