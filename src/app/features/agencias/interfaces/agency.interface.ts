export interface IAgencyResponse {
  agencia: string;
  distrito: string;
  provincia: string;
  departamento: string;
  direccion: string;
  lat: number;
  lon: number;
}

export class AgencyModel {
  id: number;  
  agencia: string;
  distrito: string;
  provincia: string;
  departamento: string;
  direccion: string;
  lat: number;
  lon: number;
  imagen: string;

  constructor(data: IAgencyResponse, index:number) {
    this.id = index;
    this.agencia = data.agencia;
    this.departamento = data.departamento;
    this.distrito = data.distrito;
    this.provincia = data.provincia;
    this.direccion = data.direccion;
    this.lat = data.lat;
    this.lon = data.lon;
    const i = this.generateIndex(1,4);
    this.imagen = `/assets/agencies/${i}.jpg`;
  }

  private generateIndex(max:number, min:number){
      return Math.floor((Math.random()*(max-min))+min);
  }
}
