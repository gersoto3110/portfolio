import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css'],
})
export class ModalLoginComponent implements OnInit {
  @Input() openModalLogin!: boolean;
  @Input() switchModalLogin!: () => void;
  formUser: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.formUser = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}

  onModelContainerClick(e: Event): void {
    e.stopPropagation();
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    this.authService.login(this.formUser.value);
  }
}
