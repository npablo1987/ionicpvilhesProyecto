import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Capacitor } from '@capacitor/core';


@Injectable({
  providedIn: 'root'
})
export class ServiciodbService {


private db!: SQLiteDBConnection;
readonly db_table: string = "estudiante";
readonly db_name: string = "estudiantes.db";

private sqlite: SQLiteConnection;

constructor() {
  this.sqlite = new SQLiteConnection(CapacitorSQLite);
}

  // Inicializar la base de datos
  async initDB() {
    try {  
      // Crea la conexión a la base de datos
      this.db = await this.sqlite.createConnection(
        this.db_name,   // Nombre de la base de datos
        false,          // encrypted: si la base de datos está encriptada
        'no-encryption',// mode: modo de encriptación
        1,              // version: versión de la base de datos
        false           // readonly: si la conexión es de solo lectura
      );

      await this.db.open();

      // Crear la tabla si no existe
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS ${this.db_table} (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          rut TEXT NOT NULL,
          nombre TEXT NOT NULL,
          apellidop TEXT NOT NULL,
          apellidom TEXT NOT NULL,
          correo TEXT NOT NULL
        );
      `;
      await this.db.execute(createTableQuery);
      console.log('Base de datos inicializada');
    } catch (e) {
      console.error('Error al inicializar la base de datos', e);
    }
  }


  async addItem(rut: string, nombres: string, apellidop: string, apellidom: string, correo: string ){
    try {
      if(!rut || !nombres || !apellidop || !apellidom || !correo){
        alert('Por favor, Ingrese todos los campos');
        return
      }
      const inserQuery = `
      INSERT INTO ${this.db_table} (rut, nombre, apellidop, apellidom, correo) VALUES (?,?,?,?,?);
      `;
      const values = [rut, nombres, apellidop, apellidom, correo];
      await this.db.run(inserQuery, values);
      console.log('Estudiante fue Agregado!')
      
    } catch (error) {
      console.error('Error al agregar el estudiante', error);
    }

  }




}


