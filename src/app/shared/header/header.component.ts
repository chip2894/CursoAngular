import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router, public _service: InfoPaginaService){}

  buscarProducto(termino: string){
    if(termino.length < 1){
      return;
    }

    this.router.navigate(['/search', termino]);

  }
  
}
