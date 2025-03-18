import bcrypt from "bcrypt";

async function generateSalt() {
  return await bcrypt.genSalt(10);
}
export const salt = generateSalt();
