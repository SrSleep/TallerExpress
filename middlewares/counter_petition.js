let contadorRutas = {}
const counter_petition = (req,res,next) => {

    const ruta = req.originalUrl;
    contadorRutas[ruta] = (contadorRutas[ruta] || 0) + 1;
    console.log(contadorRutas);
    console.log(`La ruta ${ruta} ha recibido ${contadorRutas[ruta]} solicitudes.`);
    next();

}
export default counter_petition