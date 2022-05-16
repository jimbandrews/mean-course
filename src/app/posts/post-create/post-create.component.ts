import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';

// this decorator turns the class below into something that Angular understands
// selector creates the html tag that you will use for this component
// templateUrl and styleUrls are the relative paths of the html and css files for the component
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

// Creating component class
export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';
  @Output() postCreated = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddPost(form: NgForm) {
    const post: Post = {
      title: form.value.title,
      content: form.value.title
    };
    this.postCreated.emit(post);
  }

}
