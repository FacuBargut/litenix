import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar( open:boolean){
    var capa = document.getElementById('capa');
    var menu = document.getElementById('sidebar-menu')
    if(open){
      capa?.classList.add("mostrarCapa"); 
      menu?.classList.add("mostrarMenu"); 
      
    }else{
      capa?.classList.remove('mostrarCapa');
      menu?.classList.add("mostrarMenu"); 
    }
  }

  

}
