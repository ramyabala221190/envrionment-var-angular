import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customWebpack';
  ngOnInit(){
    console.log(`var1:${process.env["var1"]}
       var2 : ${process.env["var2"]}
       jenkins_build_number:${process.env["jenkins_build_number"]}
       url:${process.env["url"]}
       description:${process.env["description"]}`
      )
  }
}
