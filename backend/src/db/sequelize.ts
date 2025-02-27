import { Sequelize } from "sequelize-typescript";
import config from "config";
import TargetMarket from "../model/target-market";
import Present from "../model/presents";

const logging = config.get<boolean>('sequelize.logging') ? console.log : false


const sequelize = new Sequelize({
    models: [  TargetMarket, Present],
    dialect: 'mysql',
    ...config.get('db'),
    logging
})

export default sequelize