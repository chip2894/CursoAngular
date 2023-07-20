import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion | undefined;

  id: string = '';

  constructor(private route: ActivatedRoute, public productoService: ProductosService){

  }

  ngOnInit() {
    this.route.params
    .subscribe(parametros =>{
      this.id = parametros['id'];
      this.productoService.getProducto(this.id)
      .subscribe( (response: ProductoDescripcion) => {
        this.producto = response;
      });

    })
  }

}
