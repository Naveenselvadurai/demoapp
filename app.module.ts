import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BooleanInput,coerceBooleanProperty } from '@angular/cdk/coercion';
import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldControl } from '@angular/material/form-field';
import { FormControlName } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,MatFormFieldModule,
        MatInputModule,MatButtonModule,MatCardModule,MatToolbarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
