import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-password',
  templateUrl: './register-password.component.html',
  styleUrls: ['./register-password.component.scss'],
})
export class RegisterPasswordComponent implements OnInit {
  form!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      emailCredential: new FormControl(null, []),
      usernameCredential: new FormControl(null, []),
      credentialPassword: new FormControl(null, []),
      websiteName: new FormControl(null, []),
      websiteUrl: new FormControl(null, []),
    });
  }
}
