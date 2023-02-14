const ModelVehiculo = require('../models/model.vehiculo')
class ControllerVehiculo
{
    static async registroControllerVehiculo(serie)
    {
        await ModelVehiculo.registroVehiculo(serie)
    }


    static async registroControllerMonitoreoVehiculo(CodiDispVehi_, ConeMoni_, UltiVeloMoni_, UltiFechMoni_,
                                                     UltiLatiMoni_, UltiLongMoni_, UltiRumbMoni_, SateContMoni_)
    {
        await ModelVehiculo.registroModelMonitoreoVehiculo(CodiDispVehi_, ConeMoni_, UltiVeloMoni_, UltiFechMoni_,
            UltiLatiMoni_, UltiLongMoni_, UltiRumbMoni_, SateContMoni_)
    }


    static async registroControllerHistorialMonitoreoVehiculo(CodiDispVehi_, ConeMoni_, UltiVeloMoni_, UltiFechMoni_,
                                                     UltiLatiMoni_, UltiLongMoni_, UltiRumbMoni_, SateContMoni_)
    {
        await ModelVehiculo.registroModelHistorialMonitoreoVehiculo(CodiDispVehi_, ConeMoni_, UltiVeloMoni_, UltiFechMoni_,
            UltiLatiMoni_, UltiLongMoni_, UltiRumbMoni_, SateContMoni_)
    }

}


module.exports = ControllerVehiculo