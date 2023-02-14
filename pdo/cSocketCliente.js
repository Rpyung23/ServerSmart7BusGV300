let CF0F1F2 = require('../pdo/cF0F1F2')
let ControllerTramaSocket = require("../controller/controller.tramaSocket")
let ControllerVehiculo = require('../controller/controller.vehiculo')
class CSocketCliente
{

    constructor(socket)
    {
        this.oSocket = socket
        this.oF0F1F2 = null
    }

    insertarTrama(trama)
    {
        /**  INSERTANDO TRAMA SOCKET  **/

        try{
            var serie = trama[2].toString(16)+trama[3].toString(16)+trama[4].toString(16);
            var tramaString = ""
            for (var i = 0;i<trama.length;i++)
            {
                var aux = trama[i].toString(16)
                tramaString=tramaString+" "+(aux.length == 1 ? "0"+aux : aux)
            }
            ControllerTramaSocket.registerControllerTramaSocket(serie,tramaString)
        }catch (e) {
            console.log("ERROR AL INSERTAR LA TRAMA SOCKET")
            console.log(e)
        }

        /**  FIN TRAMA SOCKET  **/
        switch (trama[0].toString(16)){
            case 'f0':
            case 'f1':
            case 'f2':
                this.oF0F1F2 = new CF0F1F2(trama)
                this.getF0F1F2.initDivicionTrama()
                ControllerVehiculo.registroControllerVehiculo(this.getF0F1F2.getSerieEquipo)
                if (this.getF0F1F2.getTipoTrama == 'f1')
                {
                    ControllerVehiculo.registroControllerMonitoreoVehiculo(this.getF0F1F2.getSerieEquipo,
                        1,this.getF0F1F2.getVelocidad,
                        this.getF0F1F2.getFecha,this.getF0F1F2.getLatitud,
                        this.getF0F1F2.getLongitud,this.getF0F1F2.getOrientacion,this.getF0F1F2.getSatelites)

                    try{
                        ControllerVehiculo.registroControllerHistorialMonitoreoVehiculo(this.getF0F1F2.getSerieEquipo,
                            1,this.getF0F1F2.getVelocidad,
                            this.getF0F1F2.getFecha,this.getF0F1F2.getLatitud,
                            this.getF0F1F2.getLongitud,this.getF0F1F2.getOrientacion,this.getF0F1F2.getSatelites)
                    }catch (e) {
                        console.log("HISTORIAL CALL CONTROLLER")
                        console.log(e)
                    }
                }
                break;
        }
    }


    imprimirTramaDecodificada()
    {
        if(this.oF0F1F2 != null)
        {
            console.log(this.getF0F1F2.getTramaCompletaHexadecimal)
            console.log("TIPO : "+this.getF0F1F2.getTipoTrama)
            console.log("TAMANIO : "+this.getF0F1F2.getTamanioTrama)
            console.log("SERIE : "+this.getF0F1F2.getSerieEquipo)
            console.log("VELOCIDAD : "+this.getF0F1F2.getVelocidad)
            console.log("ORIENTACION : "+this.getF0F1F2.getOrientacion)
            console.log("SATELITES : "+this.getF0F1F2.getSatelites)
            console.log("FECHA : "+this.getF0F1F2.getFecha)
            console.log("LATITUD : "+this.getF0F1F2.getLatitud)
            console.log("LONGITUD : "+this.getF0F1F2.getLongitud)
            console.log("BANDERAS : "+this.getF0F1F2.getBandera)
            console.log("************************************************************")
        }
    }



    get getSocket(){
        return this.oSocket
    }

    get getF0F1F2(){
        return this.oF0F1F2
    }


    set setSocket(valor){
        this.oSocket = valor
    }



    set setF0F1F2(valor){
        this.oF0F1F2 = valor
    }
}

module.exports = CSocketCliente