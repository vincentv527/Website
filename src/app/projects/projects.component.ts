import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  centered = false;
  disabled = false;
  unbounded = false;
  radius: number = 0;
  color: string = "rgba(189, 195, 1991, .4)";

  projects: any[] = [];

  constructor(){
    this.projects.push(
      {
        url: "https://vincentv527.github.io/NutritionAid/home",
        title: "NutritionAid",
        img: "assets/images/NutritionAid.png",
        description: "This is a project that utilizes TheMealDB's API in order to help people find or choose a new meal in order to help those indecisive eaters."
      })
  }

  openUrl(url){
    console.log(url)
    window.open(url,'_blank')
  }

}
