export class Proyecto {
    constructor(
    public numProyecto : number, 
    public nomProyecto : string, 
    public prioridad : string, 
    public fecha : Date, 
    public cliente: string,
    public descripcion : string, 
    public estatus : string, 
    public cantidad : string, 
    public fRequerida : Date, 
    public fFinalizacion : Date,
    public fEntrega : Date, 
    public numCotizacion : number,
    ){} 
}
