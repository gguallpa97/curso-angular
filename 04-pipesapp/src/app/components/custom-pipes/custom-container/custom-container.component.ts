import { Component, OnInit } from '@angular/core';
import { TEMPERATURA_ENUM } from 'src/app/shared/enums/temperatura.enum';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';

@Component({
  selector: 'app-custom-container',
  templateUrl: './custom-container.component.html',
  styleUrls: ['./custom-container.component.css']
})
export class CustomContainerComponent implements OnInit {

  grados = 12;
  tipo: TEMPERATURA_ENUM = TEMPERATURA_ENUM.F;
  constructor(private darkModeService: DarkModeService) { }

  ngOnInit(): void {
  }

  get dark(){
    return this.darkModeService.dark;
  }

  changeMode(){
    this.darkModeService.changeMode();
  }

}
