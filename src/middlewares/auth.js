import jwt from "jsonwebtoken";
const secretKey = process.env.SECRET;

export function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Acesso negado. Token não fornecido." });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido ou expirado." });
    }
    req.user = decoded;
    next();
  });
}
