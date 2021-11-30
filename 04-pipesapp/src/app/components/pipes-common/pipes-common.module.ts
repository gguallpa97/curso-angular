import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { TextoComponent } from './texto/texto.component';
import { NumerosComponent } from './numeros/numeros.component';
import { FechaComponent } from './fecha/fecha.component';
import { JsonComponent } from './json/json.component';
import { KeyvalueComponent } from './keyvalue/keyvalue.component';
import { SliceComponent } from './slice/slice.component';
import { I18nselectComponent } from './i18nselect/i18nselect.component';
import { I18npluralComponent } from './i18nplural/i18nplural.component';
import { AsyncComponent } from './async/async.component';



@NgModule({
  declarations: [ContainerComponent, TextoComponent, NumerosComponent, FechaComponent, JsonComponent, KeyvalueComponent, SliceComponent, I18nselectComponent, I18npluralComponent, AsyncComponent],
  imports: [
    CommonModule
  ],
  exports: [ContainerComponent]
})
export class PipesCommonModule { }
