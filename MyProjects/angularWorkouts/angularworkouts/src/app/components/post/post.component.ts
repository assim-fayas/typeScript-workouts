import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
@Input() fromParent!:string
fromchildOutput!:string
title:string='your post shows here'
name:string='Anbin'
massagepost='Massage post'
posts='posts from post component'
postchildMessage:string='message comming from the post child';

recivemessage($event:string){
  this.fromchildOutput=$event

}
}
