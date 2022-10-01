import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ListadoComponent } from '../listado/listado.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  @Input() listar : ListadoComponent | undefined;


  public producto:Producto = new Producto("",0,0,0);



  constructor(public servicioProducto:ProductoService) { }

  ngOnInit(): void {
  }

  //se define la función ccrear que será llamada cuando se de clic en registrar
  agregarProducto() : void{
    this.servicioProducto.crearProducto(this.producto).subscribe(resp =>{
      //una vez se envíe el objeto local se define en blanco
      this.producto = new Producto("", 0, 0, 0);
      console.log(resp);
      this.listar?.ngOnInit();
    }
    );
  }




}
