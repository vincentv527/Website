import { Component, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ChartComponent,
  ApexYAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
};

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  
  
  constructor(){
    this.chartOptions ={
      series: [{
        name: 'Series 1',
        data: [100, 80, 100, 90, 90, 100, 70, 60],
      }],
      chart: {
        height: 600,
        type: 'radar',
        toolbar:{
          show:false
        }
      },
      title: {
        text: ''
      },
      xaxis: {
        categories: ['Angular', 'Python', 'C#', 'Java', 'JavaScript(TypeScript)', 'HTML/CSS', "SQL", "Oracle"]
      },
      yaxis:{
        show: false,

      }
    };
  }
}
