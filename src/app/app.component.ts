import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customWebpack';
  ngOnInit(){
    console.log(
      `\nvar1:${process.env["var1"]}
       \nvar2 : ${process.env["var2"]}
       \njenkins_build_number:${process.env["jenkins_build_number"]}
       \nurl:${process.env["url"]}
       \ndescription:${process.env["description"]}`
      )
  }
}
