import { Component,Input,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: ['./post-lists.component.css']
})
export class PostListsComponent {
  outputChildmessage:string='message from child comp via output and event emio=tter'

  @Input() post!:string
  @Output () messageEvent=new EventEmitter<string>


  message(){

this.messageEvent.emit(this.outputChildmessage);
  }
}
