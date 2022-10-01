import { Component, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ListadoComponent } from '../listado/listado.component';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.scss']
})
export class EliminarComponent implements OnInit {

  constructor(public servicioProducto:ProductoService) { }

  
  @Input() listar : ListadoComponent | undefined;

  public productos:Array<Producto> = [];

  @Output() producto:Producto={
    nombre:"",
    precio:0,
    stock:0,
    estado:0
   
  }



  ngOnInit(): void {
  }

  eliminar(index:number){
    this.servicioProducto.eliminarProducto(this.productos[index]).subscribe(resp=>{
      console.log(resp)

     }); 
     

  }

}
