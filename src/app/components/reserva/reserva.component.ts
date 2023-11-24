import { Component } from '@angular/core';
import { TiqueteService } from 'src/app/services/tiquete.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {
  reservaList: any = [];

  constructor(private tiqueteService: TiqueteService,
    ) {


  }
  ngOnInit() {
    this.getAllTiquetes();
  }


  getAllTiquetes() {
    this.tiqueteService.getAllTiqueteData(localStorage.getItem('accessToken')).subscribe(
      (data: {}) => {
        this.reservaList = data
      }
    );
  }
}
