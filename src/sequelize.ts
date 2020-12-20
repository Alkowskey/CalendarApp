import {Sequelize} from "sequelize-typescript";

export const sequelize = new Sequelize({
    dialect: 'postgres',
    username: 'postgres',
    password: 'postgres',
    database: 'CalendarApp', //for now
    storage: 'memory',
    models: [__dirname + '/Models']
  });