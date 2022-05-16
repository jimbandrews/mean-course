import { Component, OnInit, EventEmitter, Output } from '@angular/core';

// this decorator turns the class below into something that Angular understands
// selector creates the html tag that you will use for this component
// templateUrl and styleUrls are the relative paths of the html and css files for the component
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

// Creating component class
export class PostCreateComponent implements OnInit {
  enteredContent = '';
  enteredTitle = '';
  @Output() postCreated = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAddPost() {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post);
  }

}
