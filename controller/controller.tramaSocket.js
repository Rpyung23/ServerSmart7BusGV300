var ModelTramaSocket = require("../models/model.tramaSocket")
class ControllerTramaSocket
{
    static async registerControllerTramaSocket(serie,trama)
    {
        await ModelTramaSocket.registerModelTramaSocket(serie,trama)
    }
}

module.exports = ControllerTramaSocket