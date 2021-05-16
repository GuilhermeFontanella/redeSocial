import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FeedComponent } from './feed/feed.component';
import { PostsComponent } from './posts/posts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { SpeakComponent } from './speak/speak.component';
import { LoginComponent } from './login/login.component';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProfileComponent } from './profile/profile.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { CadastroComponent } from './cadastro/cadastro.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AuthGuardService } from './guards/auth-guard.service';
import {MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { LojaComponent } from './loja/loja.component';
import {A11yModule} from '@angular/cdk/a11y';
import { FormTextComponent } from './shared/form-text/form-text.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormSelectComponent } from './shared/form-select/form-select.component';
import { DatePickerFormComponent } from './date-picker-form/date-picker-form.component';
import { FormPasswordComponent } from './form-password/form-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FeedComponent,
    PostsComponent,
    SpeakComponent,
    LoginComponent,
    ProfileDialogComponent,
    ProfileComponent,
    CadastroComponent,
    LojaComponent,
    FormTextComponent,
    FormSelectComponent,
    DatePickerFormComponent,
    FormPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDividerModule,
    MatListModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatSelectModule,  
    A11yModule,
    MatInputModule,
    MatSnackBarModule 
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    AuthGuardService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
