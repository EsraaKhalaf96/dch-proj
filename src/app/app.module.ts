import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesModule } from './shared/pipes/pipes.module';
import { LoaderComponent } from './shared/loader/loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderService } from './shared/loader/loader.service';
import { HttpInterceptorHandler } from './shared/services/HttpInterceptor';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PipesModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    ToastrModule.forRoot({
      timeOut: 100000
    }),
    ToastContainerModule,
  ],
  exports: [
    LoaderComponent
  ],
  providers: [
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorHandler,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
