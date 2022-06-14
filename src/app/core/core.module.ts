import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { LoaderModule } from './loader/loader.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestInterceptor } from './interceptors/http-request.interceptor';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LoaderModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    },
  ],
  exports: [
    LoaderModule
  ]
})
export class CoreModule { }
