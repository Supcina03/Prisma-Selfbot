/*Imports are things that are coming outside of that module that you need. You might be using those in the components inside that module. */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'ngx-md';

import { AppComponent } from './app.component';
import { HeaderComponent } from './overall/header.component';
import { FooterComponent } from './overall/footer.component';
import { LinksComponent } from './overall/links.component';
import { ExampleComponent } from './example/example.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { AboutusComponent } from './aboutus/aboutus.component'; /*Referring to different diretories */
@NgModule({
  imports: [
    RouterModule.forRoot([]),
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    MarkdownModule.forRoot(),
  ],
  declarations: [
    /*Declarations are things you created under a module such as components, services, pipes. */
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LinksComponent,
    ExampleComponent,
    LoginComponent,
    RegisterComponent,
    TutorialComponent,
    AboutusComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
