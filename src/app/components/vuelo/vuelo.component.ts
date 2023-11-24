import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { VueloService } from 'src/app/services/vuelo.service';

@Component({
  selector: 'app-vuelo',
  templateUrl: './vuelo.component.html',
  styleUrls: ['./vuelo.component.css']
})
export class VueloComponent {
  vueloList: any = [];
  vueloForm: any = this.formBuilder.group({
    pasaporte: '',
    documento: '',
    nombre: '',
    fechaNac: Date
  })
  idVuelo: any='';

  constructor(private vueloService: VueloService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private auth: AuthenticationService) {


  }

  ngOnInit() {
    this.getAllVuelos();
  }


  getAllVuelos() {
    this.vueloService.getAllVueloData(localStorage.getItem('accessToken')).subscribe(
      (data: {}) => {
        this.vueloList = data
      }
    );
  }

  comprar(id: any){
    console.log(id)
    this.idVuelo=id

  }

  newVueloEntry(){
    this.vueloService.newVuelo(this.idVuelo, this.vueloForm.value).subscribe(
      () => {
        this.router.navigate(['/vuelo']);
      }
    );
  }
}
