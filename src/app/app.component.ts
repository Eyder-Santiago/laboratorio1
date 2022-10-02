import { Component, OnInit } from '@angular/core';
import { Producto } from './modelo/producto';
import { ProductoService } from './servicios/producto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Laboratorio1';

  productos:Producto[]=[];

  constructor(private servicioProducto:ProductoService){

  }

  cargarProductos(){
    this.servicioProducto.getProductos().subscribe((res: Producto[]) => {
      this.productos = res;
    });
  }

  onProductoCreado(producto : Producto){
    this.cargarProductos();
    console.log(producto);
  }

  onProductoEliminado(producto:Producto){
    this.cargarProductos();
    console.log(producto);
  }

  onProductoEditado(producto:Producto){
    this.cargarProductos();
    console.log(producto);
  }

  ngOnInit(): void {
    this.cargarProductos();
  }

}
