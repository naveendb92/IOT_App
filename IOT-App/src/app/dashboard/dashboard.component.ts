import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  chart = new Chart({
    credits: {
      enabled: false
    },
    title: {
      align: 'center',
      verticalAlign: 'middle',
      useHTML: true,
      text: '<i class="fa fa-exclamation-triangle"></i>',
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
      text:'Alert Status <br> 13',
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
        data:[
          { name: 'Off',     y: 56.33, color : '#f3766a'  }, 
          { name: 'Critical',   y: 24.03, color : '#f4c37f'  }, 
          { name: 'Warning',  y: 10.38, color : '#31393c'  }
        ],
      }
    ]
    });
  constructor() { }

  ngOnInit() {
  }

}
