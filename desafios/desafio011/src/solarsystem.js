module.exports = {
    get AU_IN_KILOMETERS() { return 149587870}, // o metodo get interpreta essa função como se fosse uma variavel
    
    convertAUtoKm(au){
        return au *this.AU_IN_KILOMETERS
    }
}