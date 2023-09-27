function obtenerTransporteAdecuado(distancia){
    let transporte = "avion"

    switch(true){
        case (distancia > 0 && distancia <= 1000):
            transporte = "pie"
            break;
        case (distancia > 1000 && distancia <= 10000):
            transporte = "bicicleta"
            break;
        case (distancia > 10000 && distancia <= 30000):
            transporte = "colectivo"
            break;
        case (distancia > 30000 && distancia <= 1000000):
            transporte = "auto"
            break;
        default:
            transporte = "avion"
            break;
    } 

    document.getElementById('resultadoDistancia').textContent = "El transporte adecuado para tu distancia es: " +  transporte
}