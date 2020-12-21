import {Component, OnInit} from '@angular/core';
import * as CanvasJS from '../../assets/canvasjs.min';

@Component({
  selector: 'app-posts-chart',
  templateUrl: './posts-chart.component.html',
  styleUrls: ['./posts-chart.component.scss']
})
export class PostsChartComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.generateMap();
  }

  generateMap(): void {
    const dataPoints = [];
    let y = 0;
    for (let i = 0; i < 10000; i++) {
      y += Math.round(5 + Math.random() * (-5 - 5));
      dataPoints.push({y});
    }
    const chart = new CanvasJS.Chart('chartContainer', {
      zoomEnabled: true,
      animationEnabled: true,
      exportEnabled: true,
      subtitles: [{
        text: 'Posts'
      }],
      data: [
        {
          type: 'line',
          dataPoints
        }]
    });

    chart.render();
  }


}
