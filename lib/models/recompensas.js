class Rewards{
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
		return this.id;
	}
	get getPatrocinador(){
		return this.patrocinador;
	}
	get getCodigo(){
		return this.codigo;
	}
	get getCostoPuntos(){
		return this.costoPuntos;
	}
	get getNombre(){
		return this.nombre;
	}
	get getTipo(){
		return this.tipo;
	}
	get getFechaLimite(){
		return this.fechaLimite;
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

module.exports = Rewards;