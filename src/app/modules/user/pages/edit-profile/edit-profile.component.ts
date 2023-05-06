import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  form!: FormGroup;
  user!: User;
  id!: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.userService.obtain(this.id).subscribe((data) => {
      this.user = data;
      this.form.patchValue({
        username: data.username,
        email: data.email,
      });
    });
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      username: new FormControl(null, []),
      email: new FormControl(null, []),
    });
  }

  deleteUser() {
    this.userService.delete(this.id).subscribe(() => {
      alert('Usuário deletado com sucesso !!');
      this.authService.logout();
      this.router.navigate(['/auth/sign-in']);
    });
  }

  updateUser() {
    const input = this.form.getRawValue();
    this.userService.update(this.id, input).subscribe((data) => {
      alert('Usuário atualizado com sucesso !!');
    });
  }
}
