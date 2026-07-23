import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config()


// posso exportar como default colocando o export ao criar a constant ou classe
export const authenticationToken = (req, res, next) => {

    const getToken = req.headers.authorization;
    if (!getToken) {
        return res.status(401).json({ error: "Token não fornecido" });
    }
    console.log(getToken);
    
    const bearerTokken = getToken.split(" ")[1];
    console.log(bearerTokken);
    
    
    console.log(bearerTokken);
    

    if (!bearerTokken) {
        return res.status(401).json({ error: "Token não fornecido" })
    }


    //
    jwt.verify(bearerTokken, process.env.JWT_SECRET, (error, user) => {
        if (error) {
            return res.status(403).json({ error: "Token inválido!" })
        }
        req.user = user
        next()
    });
}
    //permite na rota marcar os usuarios permitidos marcados pelos ... exemplo "adminRole("admin","gerente","vendedor")"
    export const adminRole = (...allowedRoles) => {
        return (req, res, next) => {
            if (!req.user) {
                return res.status(401).json({
                    error: "Usuário não autenticado!",
                });
            }

            if (!allowedRoles.includes(req.user.role)) {
                return res.status(403).json({
                    error: "Você não tem permissão para realizar esta ação!",
                });
            }
            next();
        };

    }


export default authenticationToken;