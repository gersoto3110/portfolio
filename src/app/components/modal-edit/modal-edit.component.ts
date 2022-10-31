import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProfile } from 'src/app/interface/IProfileDetails';
import { ApiService, dataUrls } from 'src/app/service/api.service';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css'],
})
export class ModalEditComponent implements OnInit {
  @Input() openModalEdit!: boolean;
  @Input() switchModalEdit!: () => void;
  profile!: IProfile;
  formProfile!: FormGroup;

  constructor(
    private readonly apiService: ApiService,
    private formBuilder: FormBuilder
  ) {
    this.formProfile = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.maxLength(20)]],
      occupation: ['', [Validators.required, Validators.maxLength(20)]],
      urlImgBanner: ['', [Validators.required, Validators.maxLength(20)]],
      about: ['', [Validators.required, Validators.maxLength(1000)]],
    });
  }

  ngOnInit(): void {
    this.apiService.getAll(dataUrls.profile).subscribe((profiles) => {
      this.profile = profiles[0];
      this.formProfile.controls['name'].setValue(this.profile.name);
      this.formProfile.controls['lastName'].setValue(this.profile.lastName);
      this.formProfile.controls['occupation'].setValue(this.profile.occupation);
      this.formProfile.controls['urlImgBanner'].setValue(
        this.profile.urlImgBanner
      );
      this.formProfile.controls['about'].setValue(this.profile.about);
    });
  }

  onModelContainerClick(e: Event): void {
    e.stopPropagation();
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    this.profile = { ...this.profile, ...this.formProfile.value };

    this.apiService.add(dataUrls.profile, this.profile).subscribe((res) => {
      window.location.reload();
    });

    alert('El perfil ha sido actualizado');
  }
}
