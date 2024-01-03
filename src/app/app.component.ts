import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customWebpack';
  ngOnInit(){
    console.log(process.env["environment"] ,process.env["port"],process.env["jenkins_build_number"])
  }
}
