import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ForumFunctionsService} from "../../services/forum-functions.service";

@Component({
  selector: 'CreateAccountAPP',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  formCreateAccount!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ForumFunctions: ForumFunctionsService,
  ) {
  }

  ngOnInit():
  void {
    this.formCreateAccount = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      confirm_terms: ['', Validators.required]
    })
  }

onSubmitForm() : void {
  const _v = this.formCreateAccount.value;
  this.ForumFunctions.toCreateAccountUser(
    _v.first_name,
    _v.last_name,
    _v.email,
    _v.phone,
    _v.confirm_terms,
    _v.password
  )
}

}
