import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from './posts/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = []
  private postsUpdated = new Subject<Post[]>();

  constructor() { }

  getPosts() {
    // this is a best practice when copying reference data types, like arrays
    return [...this.posts];
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content};
    this.posts.push(post)
    this.postsUpdated.next([...this.posts])
  }
}