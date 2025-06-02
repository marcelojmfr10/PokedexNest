

export const EnvConfiguration = () => ({
    environment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    port: process.env.PORT || 3001,
    defaultLimit: process.env.DEFAULT_LIMIT || 7, // lo manda como un string
})

// export const env = () => {
//     return {
//         // lo mismo de arriba
//     }
// }