import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UpdateProfileService } from '../services/update-profile.service';
import { UserProfileService } from '../services/user-profile.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit{

	updateForm : FormGroup;
  user : User;
  updatedUser : User;
  imageUrl: any;
  imgUrl : any;
  //errorMessage : string;
  message : string;
  //username : string = 'randeep18';

  constructor(private formBuilder : FormBuilder,
    private updateProfileService : UpdateProfileService,
    private userProfileService : UserProfileService,
    private router: Router,
    private snackBar: MdSnackBar ) { }

  ngOnInit() {
    let username : string = localStorage.getItem("username");
    this.userProfileService.getUser(username)
    .subscribe(data => {
      this.user = data;
      this.createForm();
    });
  }

  /* method definition in your class */
  imageUpload(e) {
    let reader = new FileReader();
    /* get the selected file from event */
    let file = e.target.files[0];
    reader.onloadend = () => {
      /* Assign the result to variable for setting the src of image element */
      this.imageUrl = reader.result;
    }
    this.imgUrl = reader.readAsDataURL(file);
  }


  createForm() {
    this.updateForm = this.formBuilder.group ({
      userName : [this.user.userName],
      firstName : [this.user.firstName],
      lastName : [this.user.lastName],
      dob : [this.user.dob, Validators.required],
      emailId : [this.user.emailId, [Validators.required, Validators.email]],
      contactNo : [this.user.contactNo],
      profilePhoto : [this.user.profilePhoto]
    });

    this.updateForm.valueChanges
    .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  updateUser() {
    //this.submitted = true;

    this.updatedUser = this.updateForm.value;

    if(this.updatedUser.lastName == null) {
      this.updatedUser.lastName = "";
    }
    if(this.updatedUser.contactNo == null) {
      this.updatedUser.contactNo = "";
    }

    if(this.imageUrl == null) {
      this.updatedUser.profilePhoto = this.user.profilePhoto;
    }
    else {
      this.updatedUser.profilePhoto = this.imageUrl;
    }
    this.updatedUser.gender = this.user.gender;
    this.updatedUser.password = this.user.password;

    this.updateProfileService.updateUserProfile(this.updatedUser)
    .subscribe( 
      data => {
        this.snackBar.open('Updated successfully', 'Close', { duration: 4000 })
        this.router.navigate(["/userprofile"]);
      },
      error => {
        this.snackBar.open(error, 'Close', { duration: 4000 })
        this.router.navigate(["/userprofile"]);
      }
      );

  }

  onValueChanged(data?: any) {
    if (!this.updateForm) { return; }
    const form = this.updateForm;

    for (const field in this.formErrors) {

      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'dob': '',
    'emailId': '',
  };

  validationMessages = {
    'dob': {
      'required': 'Date of birth is required.'
    },
    'emailId': {
      'required': 'Email Id is required.',
      'email': 'Email Id is incorrect.'
    },
  };
}