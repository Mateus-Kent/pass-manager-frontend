import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CredentialService } from '../../services/credential.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Credential } from '../../models/Credential';

@Component({
  selector: 'app-edit-credential',
  templateUrl: './edit-credential.component.html',
  styleUrls: ['./edit-credential.component.scss'],
})
export class EditCredentialComponent implements OnInit {
  form!: FormGroup;
  id: number;
  credential!: Credential;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private credentialService: CredentialService
  ) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.initForm();
    this.credentialService.obtain(this.id).subscribe((data) => {
      this.credential = data;
      this.form.patchValue({
        emailCredential: data.emailCredential,
        usernameCredential: data.usernameCredential,
        credentialPassword: data.usernameCredential,
        websiteName: data.usernameCredential,
        websiteUrl: data.usernameCredential,
      });
    });
  }

  initForm() {
    this.form = new FormGroup({
      emailCredential: new FormControl(),
      usernameCredential: new FormControl(),
      credentialPassword: new FormControl(),
      websiteName: new FormControl(),
      websiteUrl: new FormControl(),
    });
  }

  updateCredential() {
    const input = this.form.getRawValue();
    this.credentialService.update(this.id, input).subscribe((data) => {
      this.router.navigate(['/credential/list']);
    });
  }
}
