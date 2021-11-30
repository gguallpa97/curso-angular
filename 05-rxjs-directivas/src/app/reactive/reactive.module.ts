import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveContainerComponent } from './reactive-container/reactive-container.component';
import { ReactiveEventComponent } from './reactive-event/reactive-event.component';
import { AreaMouseDirective } from './directives/area-mouse.directive';



@NgModule({
  declarations: [ReactiveContainerComponent, ReactiveEventComponent, AreaMouseDirective],
  imports: [
    CommonModule
  ],
  exports: [ReactiveContainerComponent, ReactiveEventComponent]
})
export class ReactiveModule { }
