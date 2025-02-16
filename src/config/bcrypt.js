import bcrypt from "bcrypt";

const saltRounds = 10;

export const salt = await bcrypt.genSalt(saltRounds);
