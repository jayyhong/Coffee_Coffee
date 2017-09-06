import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { IntroPage } from '../pages/intro/intro';
import { HomePage } from '../pages/home/home';
import { MilkPage } from '../pages/milk/milk';
import { SubmitPage } from '../pages/submit/submit';
import { OverfilledPage } from '../pages/overfilled/overfilled';
import swal from 'sweetalert2';

@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    HomePage,
    MilkPage,
    SubmitPage,
    OverfilledPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage,
    HomePage,
    MilkPage,
    SubmitPage,
    OverfilledPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
