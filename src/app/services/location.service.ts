import { Injectable } from '@angular/core';
import { Geolocation, PermissionStatus } from '@capacitor/geolocation';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';



@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private nativeGeocoder: NativeGeocoder) { }


  async getCoordenadas(): Promise<{latidude: number, longitude: number}>{
    try {
      let permStatus: PermissionStatus  = await Geolocation.checkPermissions();

      if(permStatus.location !== 'granted'){
          
          permStatus = await Geolocation.requestPermissions();

          if(permStatus.location !== 'granted'){
            throw new Error('Permiso de ubicacion Denegado!');
          }
      }
      
      const position = await Geolocation.getCurrentPosition();

      return {
          latidude: position.coords.latitude,
          longitude: position.coords.longitude
      };
    } catch (error) {
      console.error("error al obtener las coordenadas", error);
      throw error;
    }
  }


  async getCity(latidude: number, longitude: number): Promise<string>{

    try {
      let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 1
      }

      const results: NativeGeocoderResult[] = await this.nativeGeocoder.reverseGeocode(latidude, longitude, options);

      if(results && results.length > 0){
          
        const result = results[0];

        const city = result.locality || result.subAdministrativeArea || result.administrativeArea;

        return city || 'ciudad no encontrada';

      }else{
        throw new Error("No se encoentraron resulta")

      }

      
    } catch (error) {
      console.error("ERROR al obtener ciudad", error);
      throw error;

    }

  }


  async ObtenerCiudadycoordenadas(): Promise<{ latidude: number, longitude: number, city: string}>{
    try {

      const { latidude, longitude} = await this.getCoordenadas();

      const city = await this.getCity(latidude,longitude);

      return { latidude, longitude, city};
      
    } catch (error) {
      console.error("Error", error);
      throw error;
    }



  }


}
