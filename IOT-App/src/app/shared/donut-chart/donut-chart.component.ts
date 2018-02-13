import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {

  @Input() options: any;
  @Input() data: any;

  constructor() { }

  ngOnInit() {
    this.options = new Chart({
      credits: {
        enabled: false
      },
      title: {
        align: 'center',
        verticalAlign: 'middle',
        useHTML: true,
        text: this.options.title ? this.options.title.text : '',
        y: 0,
        x:-10,
        style: {
          color: '#d8d8d8',
          fontWeight: 'normal',
          fontSize:'30px',
          fontFamily: 'roboto'
        }
      },
      plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
      },
      subtitle:{
        text: this.options.subtitle ? this.options.subtitle.text : '',
        style: {
          color: '#32abf5',
          fontWeight: 'normal',
          fontSize:'16px',
          fontFamily: 'roboto'
        }
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      series:[
        {
          type:'pie',
          name:'A',
          innerSize: '85%',
          data:this.data
        }
      ]
    });    
  }

}
