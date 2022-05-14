class Recompensas{
    constructor(id,patrocinador,codigo,costoPuntos,nombre,tipo,fechaLimite){
        this.id = id;
        this.patrocinador = patrocinador;
        this.codigo = codigo;
        this.costoPuntos = costoPuntos;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaLimite = fechaLimite;
    }

    get getId(){
        return id;
    }
    get getPatrocinador(){
        return patrocinador;
    }
    get getCodigo(){
        return codigo;
    }
    get getCostoPuntos(){
        return costoPuntos;
    }
    get getNombre(){
        return nombre;
    }
    get getTipo(){
        return tipo;
    }
    get getFechaLimite(){
        return fechaLimite;
    }

    set setId(id){
        this.id = id;
    }
    set setPatrocinador(patrocinador){
        this.patrocinador = patrocinador;
    }
    set setCodigo(codigo){
        this.codigo = codigo;
    }
    set setCostoPuntos(costoPuntos){
        this.costoPuntos = costoPuntos;
    }
    set setNombre(nombre){
        this.nombre = nombre;
    }
    set setTipo(tipo){
        this.tipo = tipo;
    }
    set setFechaLimite(fechaLimite){
        this.fechaLimite = fechaLimite;
    }
}
