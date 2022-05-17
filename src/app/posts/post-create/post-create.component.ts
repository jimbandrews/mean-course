import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from 'src/app/posts.service';

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

  constructor(public postsService: PostsService) {}

  ngOnInit(): void {
  }

  onAddPost(form: NgForm) {
    if(form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
  }

}
