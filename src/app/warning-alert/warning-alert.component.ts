import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styles: [
    `
      h3{
        background-color: red;
        padding: 10px;
        text-align: center;
      }
    `
  ]
})

export class WarningAlertComponent { }
