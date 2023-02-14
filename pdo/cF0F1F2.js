let cCabezeraTrama = require('../pdo/cCabezeraTrama')
const {decimaltoHexa, HexToSignedInt} = require("../utils/parserHexa");
const parserFechas = require("../utils/fechas");
const {GeoDecimalesLatitud, GeoDecimalesLongitud} = require("../utils/geoDecimal");
class CF0F1F2 extends cCabezeraTrama
{
    constructor(trama)
    {
        super();
        this.tramaCompletaHexadecimal = trama
        this.velocidad = null
        this.orientacion = null
        this.satelites = null
        this.fecha = null
        this.latitud = null
        this.longitud = null
        this.bandera = null
    }

    /**DIVIDE LA TRAMA HEXADECIMAL A SUS RESPECTIVOS VALORES**/
    initDivicionTrama()
    {
        var data = this.getTramaCompletaHexadecimal

        this.setTipoTrama = this.getTramaCompletaHexadecimal[0].toString(16)

        var fecha = (decimaltoHexa(data[11].toString(16))+decimaltoHexa(data[10].toString(16))
            +decimaltoHexa(data[9].toString(16))+decimaltoHexa(data[8].toString(16)))
        var lat = (decimaltoHexa(data[12].toString(16))+decimaltoHexa(data[13].toString(16))
            +decimaltoHexa(data[14].toString(16))+decimaltoHexa((data[15].toString(16))))
        var lng = (decimaltoHexa(data[16].toString(16))+decimaltoHexa(data[17].toString(16))
            +decimaltoHexa(data[18].toString(16))+decimaltoHexa(data[19].toString(16)))
        this.setTamanioTrama  = decimaltoHexa(data[1].toString(16))
        this.setSerieEquipo = data[2].toString(16)+data[3].toString(16)+data[4].toString(16)
        this.setVelocidad = (parseInt(data[5].toString(16),16))
        this.setOrientacion = (parseInt(data[6].toString(16),16) * 2)
        this.setSatelites = (parseInt(data[7].toString(16),16))
        this.setFecha = (parserFechas(parseInt(fecha,16)))
        this.setLatitud = (GeoDecimalesLatitud(HexToSignedInt(lat)))
        this.setLongitud = (GeoDecimalesLongitud(HexToSignedInt(lng)))
        var binario = parseInt(decimaltoHexa(data[20].toString(16)), 16).toString(2).padStart(8, '0')
        this.setBandera = (binario)
    }


    set setVelocidad(valor)
    {
        this.velocidad = valor
    }

    set setOrientacion(valor)
    {
        this.orientacion = valor
    }
    set setSatelites(valor)
    {
        this.satelites = valor
    }
    set setFecha(valor)
    {
        this.fecha = valor
    }
    set setLatitud(valor)
    {
        this.latitud = valor
    }
    set setLongitud(valor)
    {
        this.longitud = valor
    }
    set setBandera(valor)
    {
        this.bandera = valor
    }
    set setTramaCompletaHexadecimal(valor)
    {
        this.tramaCompletaHexadecimal = valor
    }


    get getTramaCompletaHexadecimal()
    {
        return this.tramaCompletaHexadecimal;
    }
    get getVelocidad()
    {
        return this.velocidad
    }

    get getOrientacion()
    {
        return this.orientacion
    }
    get getSatelites()
    {
        return this.satelites
    }
    get getFecha()
    {
        return this.fecha
    }
    get getLatitud()
    {
        return this.latitud
    }
    get getLongitud()
    {
        return this.longitud
    }
    get getBandera()
    {
        return this.bandera
    }







}

module.exports = CF0F1F2