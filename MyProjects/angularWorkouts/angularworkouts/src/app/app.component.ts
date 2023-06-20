import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostComponent } from '../app/components/post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title: string = 'angular workouts';
  parentMessage: string = 'Message comming from the parent component';
  message!: string
  eventBind!:string
  @ViewChild(PostComponent) childComponent!:any;

  constructor() {

  }
  ngAfterViewInit() {
   
    this.message = this.childComponent.postchildMessage;
  }

//string interpolation

  interpolationMessage:string='message from type script componenet file';

// property binding
 imgUrl:string='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';

//class binding
bool:boolean=true

//event binding
btnclick(){
this.eventBind=" button clicked"
}

}
