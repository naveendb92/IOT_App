import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  total_assets_options = {
    title: {
      text: 'Total Assets <br> 40',
    },
    subtitle:{
      text:'Asset by Fleet',
    }
  }
  total_assets_data = {
    categories:['Fleet1', 'Fleet2', 'Fleet3', 'Fleet4', 'Fleet5', 'Fleet6'],
    data:[180, 160, 106.4, 129.2, 144.0, 120]
  }

  comm_status_options = {
    title: {
      text: '<i class="fa fa-wifi"></i>',
    },
    subtitle:{
      text:'Communication Status <br> 36',
    }
  }
  comm_status_data = [
    { name: 'Reporting',     y: 56.33, color : '#74d08b'    }, 
    { name: 'Non Reporting',   y: 24.03, color : '#f3766a'  }
  ]

  alert_status_options = {
    title: {
      text: '<i class="fa fa-exclamation-triangle"></i>',
    },
    subtitle:{
      text:'Alert Status <br> 13',
    }
  }
  alert_status_data = [
    { name: 'Off',     y: 56.33, color : '#f3766a'  }, 
    { name: 'Critical',   y: 24.03, color : '#f4c37f'  }, 
    { name: 'Warning',  y: 10.38, color : '#31393c'  }
  ]

  fence_status_options = {
    title: {
      text: '<i class="fa fa-map-marker"></i>',
    },
    subtitle:{
      text:'Fence Status <br> 40',
    }
  }
  fence_status_data = [
    { name: 'Inside',     y: 60, color : '#74d08b'  }, 
    { name: 'Outside',   y: 20, color : '#f3766a'  }
  ]  

  constructor() { }

  ngOnInit() {
  }

}
