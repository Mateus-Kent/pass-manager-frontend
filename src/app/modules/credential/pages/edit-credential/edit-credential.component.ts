import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-credential',
  templateUrl: './edit-credential.component.html',
  styleUrls: ['./edit-credential.component.scss'],
})
export class EditCredentialComponent implements OnInit {
  form!: FormGroup;

  constructor() {}

  ngOnInit() {
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
