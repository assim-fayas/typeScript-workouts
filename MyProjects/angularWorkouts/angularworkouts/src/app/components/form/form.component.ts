import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
posttitle!:string
postDetails!:string
postImageURL!:string
postURL!:string
addBackground!:boolean


OnkeyUp(){
  this.posttitle
}

OnkeyUped(){
  this.postDetails
}
}
