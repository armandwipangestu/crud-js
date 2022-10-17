import { Sequelize } from "sequelize";

const db = new Sequelize("crud_db", "root", "roottoor", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
