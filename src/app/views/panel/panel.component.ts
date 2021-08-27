import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserFunctionsService} from "../../services/controllers/User/user-functions.service";
import {Observable} from "rxjs";
import {ForumFunctionsService} from "../../services/forum-functions.service";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  id_user!: String;
  nameUser!: Observable<any>;
  posts!: any;

  constructor(
    private router: ActivatedRoute,
    private userFunctions: UserFunctionsService,
    private forumFunction: ForumFunctionsService
  ) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(
      (queryParams) => this.id_user = queryParams['id']
    );

    this.userFunctions.toGetTokeCredentialUser(this.id_user);

    this.forumFunction.toGetAllPosts()
      .subscribe((result) => {
        this.posts = result;
      })
  }



}
