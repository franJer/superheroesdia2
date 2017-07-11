import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  llamado: boolean = false;
  nombreLlamado : string = "";
  title = 'app';
  batman = {
    name: "batman",
    alterEgo: "alter",
    superpowers: ["de", "re"]
  };
  superlopez = {
    name: "super lopez",
    alterEgo: "alter Super",
    superpowers: ["ed", "cuatro"]
  };

 mostrarNombre(nombre){
   if(!this.llamado){
     alert("LLamando a "+nombre)
     this.nombreLlamado = nombre;
     this.llamado = true;
   } else {
      alert(this.nombreLlamado+" va de camino")
      this.llamado = false;
    }
 }
}
