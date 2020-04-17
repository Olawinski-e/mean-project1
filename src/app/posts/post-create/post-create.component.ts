import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { PostsService } from '../post-list/posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';

  constructor(public postsServices: PostsService) {}

  ngOnInit(): void {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsServices.addPost(form.value.title, form.value.content);
  }
}
