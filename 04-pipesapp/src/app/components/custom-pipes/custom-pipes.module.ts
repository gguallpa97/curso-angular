import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomContainerComponent } from './custom-container/custom-container.component';
import { DarkModePipe } from 'src/app/shared/pipes/dark-mode.pipe';
import { TemperaturaPipe } from 'src/app/shared/pipes/temperatura.pipe';



@NgModule({
  declarations: [CustomContainerComponent, TemperaturaPipe],
  imports: [
    CommonModule
  ],
  exports: [CustomContainerComponent]
})
export class CustomPipesModule { }
