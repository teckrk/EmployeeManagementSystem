import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  authService = inject(AuthService);
  profileForm!: FormGroup;
  fb = inject(FormBuilder);
  ngOnInit() {
    this.profileForm = this.fb.group({
      email: [],
      profileImage: [],
      phone: [],
      name: [],
      password: []
    })

    this.authService.getProfile().subscribe((result) => {
      console.log("profile: ", result);
      this.profileForm.patchValue(result);
    })
  }

  onUpdate() {
    this.authService.updateProfile(this.profileForm.value).subscribe(result => {
      alert("Profile Updated.");
    })
  }

  imageSrc!: string;
  fileUpload(event: Event) {
    console.log(event.target);
    var target: any = event.target;
    if (target.files && target.files[0]) {
      const file = target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        console.log(this.imageSrc);
      }
      reader.readAsDataURL(file);
    }
  }
}
