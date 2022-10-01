import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Producto } from '../../modelo/producto';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  indice:number = 0;

  public productos:Producto[]=[];
  constructor(public servicioProducto:ProductoService) { 

    //this.productos = servicioProducto.getProductos();
    this.servicioProducto.getProductos().subscribe((res: Producto[]) => {
      this.productos = res;
    });

  }



  ngOnInit(): void {
    //se invoca el servicio mediante una subscripción del mismo
    this.servicioProducto.getProductos().subscribe(
      resp=>{
        console.log(resp);
        //asignación de datos de respuesta al arreglo productos, obteniendo la respuesta del servicio y asignándola al 
        //arreglo de productos definido
        this.productos = resp;
      }
    )
  }

 

}
