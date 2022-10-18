import dotenv from 'dotenv'
dotenv.config();

export const config = Object.freeze({
    port: process.env.PORT,
    dbName: process.env.DB_NAME as string,
    dbUsername: process.env.DB_USERNAME as string,
    dbPassword: process.env.DB_PWD as string,
    jwtAccessTokenSecret: process.env.JWT_ACCESS_SECRET as string,
    accessTokenExpiresIn : process.env.JWT_ACCESS_EXPIRES_IN as string
});