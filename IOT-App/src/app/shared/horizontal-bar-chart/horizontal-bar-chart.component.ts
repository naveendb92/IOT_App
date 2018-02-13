import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.scss']
})
export class HorizontalBarChartComponent implements OnInit {

  @Input() options: any;
  @Input() data: any;

  constructor() { }

  ngOnInit() {

    this.options = new Chart({
      chart: {
          defaultSeriesType: 'bar'
      },
      credits: {
          enabled: false
      },
      title: {
          text: this.options.title ? this.options.title.text : '',
          y:17,
          style: {
            color: '#32abf5',
            fontWeight: 'normal',
            fontSize:'16px',
            fontFamily: 'roboto'
          }
      },
      subtitle: {
          text: this.options.subtitle ? this.options.subtitle.text : '' ,
          align: 'left',
          x:0,
          y:50,
          style: {
            color: '#90a4ae',
            fontWeight: 'normal',
            fontSize:'12px',
            fontFamily: 'roboto'
          }
      },
      xAxis: {
        categories: this.data.categories,  
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        labels: {
            enabled: false
        },
        minorTickLength: 0,
        tickLength: 0        
      },
      plotOptions: {
        series: {
          //borderRadius: '5px'
        }
      },      
      yAxis: {
        gridLineWidth: 0,
        labels:
        {
          enabled: false
        },
        title: { text: '' },
      },
    legend: {
      enabled:false
    },
    tooltip: {
        formatter: function () {
          return '<b>' + this.x + '</b>' + '<br>' + 'count: ' + this.y
        }
    },
    series: [{
        data: this.data.data
    }]
});


  }

}
