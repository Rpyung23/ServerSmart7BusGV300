class CCabezeraTrama
{
    constructor()
    {
        this.tipoTrama = null
        this.tamanioTrama = null
        this.serieEquipo = null
    }

    set setTipoTrama(valor)
    {
        this.tipoTrama = valor
    }

    set setTamanioTrama(valor)
    {
        this.tamanioTrama = parseInt(valor,16)
    }

    set setSerieEquipo(valor)
    {
        this.serieEquipo = valor
    }


    get getTipoTrama()
    {
        return this.tipoTrama
    }

    get getTamanioTrama()
    {
        return this.tamanioTrama
    }

    get getSerieEquipo()
    {
        return this.serieEquipo
    }

}

module.exports = CCabezeraTrama