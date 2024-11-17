import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {


  latidude: number  | null = null;
  longitude: number  | null = null;
  city: string  | null = null;
  error: string  | null = null;

  constructor(private locationService: LocationService) { }

  async ngOnInit() {

    try {
      const location = await this.locationService.ObtenerCiudadycoordenadas();
      this.latidude = location.latidude;
      this.longitude = location.longitude;
      this.city = location.city;
      } catch (error: any) {
      console.error("Error: ",error);
      this.error = error.message || 'error desconocido';
      
    }

  
  
  }



}
