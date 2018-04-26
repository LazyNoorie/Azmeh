import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GMapModule } from 'primeng/gmap';
import { ButtonModule } from 'primeng/button';
import { LoginPage } from '../pages/login/login';
import { UserPage } from '../pages/user/user';
import { MarksProvider } from '../providers/marks/marks';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    UserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    GMapModule,
    ButtonModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    UserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MarksProvider,
    HttpClient,
  ]
})
export class AppModule { }
