import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customWebpack';
  ngOnInit(){
    console.log(`environment:${process.env["environment"]}
       port : ${process.env["port"]}
       jenkins_build_number:${process.env["jenkins_build_number"]}
       url:${process.env["url"]}
       description:${process.env["description"]}`
      )
  }
}
