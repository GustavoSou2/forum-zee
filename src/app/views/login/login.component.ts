import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ForumFunctionsService} from "../../services/forum-functions.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ForumFunctions: ForumFunctionsService,
  ) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onSubmitForm() {
    this.ForumFunctions.toSignWithEmailAndPassword(this.formLogin.value.email, this.formLogin.value.password)
  }

}
