import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTMLPipe } from './htmlPipe.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [HTMLPipe],
  exports: [HTMLPipe]
})
export class PipesModule { }