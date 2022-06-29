import { sequelize } from "../config/db-setup";

export async function get_daily() {
  const QUERY = `SELECT * FROM recipes`;
  const res = await sequelize.query(QUERY);
  return res;
}
