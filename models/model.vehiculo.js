const connDB = require("../config/conn");
class ModelVehiculo
{
    static async registroVehiculo(serie)
    {
        try{
            var conn = await connDB().promise()
            var sql = "call ProcedureInsertVehiculo('"+serie+"');"
            console.log("SQL INSERT VEHICULO  :"+sql)
            await conn.query(sql)
            await conn.end()

        }catch (e) {
            console.log(e)
        }
    }

    static async registroModelMonitoreoVehiculo(CodiDispVehi_, ConeMoni_, UltiVeloMoni_, UltiFechMoni_,
                                                UltiLatiMoni_, UltiLongMoni_, UltiRumbMoni_, SateContMoni_)
    {

        var ConeMoni =  (ConeMoni_ == undefined ? 0 : ConeMoni_)
        var UltiVeloMoni = (UltiVeloMoni_ == undefined ? 0 : UltiVeloMoni_)
        var UltiFechMoni = (UltiFechMoni_ == undefined ? '1998-06-11 19:00:00' : UltiFechMoni_)
        var UltiLatiMoni = (UltiLatiMoni_ == undefined ? 0 : UltiLatiMoni_)
        var UltiLongMoni = (UltiLongMoni_ == undefined ? 0 : UltiLongMoni_)
        var UltiRumbMoni = (UltiRumbMoni_ == undefined ? 0 : UltiRumbMoni_)
        var SateContMoni = (SateContMoni_ == undefined ? 0 : SateContMoni_)

        try{
            var conn = await connDB().promise()
            var sql = "call ProcedureMonitoreoVehiculo('"+CodiDispVehi_+"', "+ConeMoni+", "+UltiVeloMoni+", '"+UltiFechMoni+"',"+UltiLatiMoni+", "+UltiLongMoni+", "+UltiRumbMoni+", "+SateContMoni+");"
            console.log("SQL INSERT MONITOREO  :"+sql)
            await conn.query(sql)
            await conn.end()
        }catch (e) {
            console.log(e)
        }
    }


    static async registroModelHistorialMonitoreoVehiculo(CodiDispVehi_, ConeMoni_, UltiVeloMoni_, UltiFechMoni_,
                                                UltiLatiMoni_, UltiLongMoni_, UltiRumbMoni_, SateContMoni_)
    {
        var ConeMoni =  (ConeMoni_ == undefined ? 0 : ConeMoni_)
        var UltiVeloMoni = (UltiVeloMoni_ == undefined ? 0 : UltiVeloMoni_)
        var UltiFechMoni = (UltiFechMoni_ == undefined ? '1998-06-11 19:00:00' : UltiFechMoni_)
        var UltiLatiMoni = (UltiLatiMoni_ == undefined ? 0 : UltiLatiMoni_)
        var UltiLongMoni = (UltiLongMoni_ == undefined ? 0 : UltiLongMoni_)
        var UltiRumbMoni = (UltiRumbMoni_ == undefined ? 0 : UltiRumbMoni_)
        var SateContMoni = (SateContMoni_ == undefined ? 0 : SateContMoni_)

        try{
            var conn = await connDB().promise()
            var sql = "insert into historial_eventos(CodiVehiHistEven, FechHistEven, LatiHistEven, LongHistEven," +
                "RumbHistEven, VeloHistEven, SateHistEven) values('"+CodiDispVehi_+"','"+UltiFechMoni+"',"+UltiLatiMoni+","+UltiLongMoni+","+UltiRumbMoni+","+UltiVeloMoni+","+SateContMoni+");"
            console.log("SQL INSERT HISTORIAL MONITOREO  :"+sql)
            await conn.query(sql)
            await conn.end()
        }catch (e) {
            console.log(e)
        }
    }
}

module.exports = ModelVehiculo