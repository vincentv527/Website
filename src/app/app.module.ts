import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    ProjectsComponent,
    HomeComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgApexchartsModule,
    NgxBootstrapIconsModule.pick(allIcons),
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {path:'home', component: HomeComponent},
      {path:'projects', component: ProjectsComponent},
      {path:'resume', component: ResumeComponent},
      {path:'aboutme', component: AboutMeComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
