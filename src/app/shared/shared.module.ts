import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { InputErrorComponent } from './components/input-error/input-error.component';

@NgModule({
  declarations: [
    InputErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  exports: [FormsModule, ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe],
})
export class SharedModule {}
