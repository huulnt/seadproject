import { Component, OnInit } from '@angular/core';
import { detectBody } from '../../app.helpers';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class MainComponent implements OnInit {

  public ngOnInit(): any {
    detectBody();
  }

  public onResize() {
    detectBody();
  }
}
