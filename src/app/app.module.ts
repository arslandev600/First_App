import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from './app.component';
import { NavComponent } from './nav-bar/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignupComponent } from './signup/signup.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Route, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';


        // route => a unique route for all components 
        // place-holder -> jidhr hm component show krwaye groupBy....
        // a button / tag => jisky click py hmny route py jana...

const routes: Route[] =[
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'about',component:AboutUsComponent},
  {path:'signup',component:SignupComponent},
  {path:'**',component:ErrorPageComponent},
  
]

@NgModule({
  declarations: [
    DemoComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    ContactUsComponent,
    SignupComponent,
    AboutUsComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class AppModule { }

// ----AppModule
        // --AppComponent
