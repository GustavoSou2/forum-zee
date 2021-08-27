import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ForumFunctionsService} from "../../services/forum-functions.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id_post!: String;
  post!: any;

  constructor(
    private router: ActivatedRoute,
    private _: ForumFunctionsService
  ) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(
      (queryParams) => this.id_post = queryParams['id']
    );

    this._.toGetAllPosts()
      .subscribe(
      (posts) => {
        posts.forEach((_post, i) => {
          if (_post['_id'] == this.id_post) {
            this.post = posts[i];
            console.log(posts[i]);
          }
        })
      }
      );
  }

}
