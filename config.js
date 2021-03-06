const PORT = process.env.PORT || 4020;
const {
    NODE_ENV,
    MONGO_ATLAS_USER,
    MONGO_ATLAS_PASSWORD,
} = process.env;

const environments = {
    // Cambios significativos en la estructura de la bd
    test: {
        PORT,
        db_uri: `mongodb+srv://${MONGO_ATLAS_USER}:${MONGO_ATLAS_PASSWORD}@madea.j9vdi.mongodb.net/test?retryWrites=true&w=majority`
    },
    // Entorno predeterminado para trabajar en el día a día       
    dev: {
        PORT,
        db_uri: `mongodb+srv://${MONGO_ATLAS_USER}:${MONGO_ATLAS_PASSWORD}@madea.j9vdi.mongodb.net/development?retryWrites=true&w=majority`
    },
    // Contiene los datos reales de nuestros usuarios/clientes
    production: {
        PORT,
        db_uri: `mongodb+srv://${MONGO_ATLAS_USER}:${MONGO_ATLAS_PASSWORD}@madea.j9vdi.mongodb.net/MasterEnCode?retryWrites=true&w=majority`
    },
}

module.exports = environments[NODE_ENV]
