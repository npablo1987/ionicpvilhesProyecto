import { Component, OnInit } from '@angular/core';
import { ServiciodbService } from 'src/app/services/serviciodb.service';

@Component({
  selector: 'app-verestudiantes',
  templateUrl: './verestudiantes.page.html',
  styleUrls: ['./verestudiantes.page.scss'],
})
export class VerestudiantesPage implements OnInit {

  students: any[] = [];

  constructor(private dbService: ServiciodbService) { }

  async ngOnInit() {
    await this.dbService.initDB;
    await this.loadStudiantes();
    
  }

  async loadStudiantes(){
    this.students = await this.dbService.getAllStudents();
  }

  pinone(id: number){
    console.log("Estudiante con id:", id);
  }

  compartirpin(student : any){

    console.log('Conpartir Estudiante:', student);
  }


  async deleteStudent(id: number){
    await this.dbService.deleteStudent(id);
    await this.loadStudiantes();
  }
  
}
