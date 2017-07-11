import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { User } from '../model/User';
import { UpdateProfileService } from '../services/update-profile.service';
import { UserProfileService } from '../services/user-profile.service';

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
              private userProfileService : UserProfileService ) { }

  ngOnInit() {
    console.log('hi');
    let username : string = localStorage.getItem("username");
    this.userProfileService.getUser(username)
      .subscribe(data => {
        this.user = data;
        console.log(data);
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
  	this.updateForm = this.formBuilder.group({
      profilePhoto : [this.user.profilePhoto],
      userName : [this.user.userName],
  		firstName : [this.user.firstName, Validators.required],
  		lastName : [this.user.lastName, Validators.required],
  		dob : [this.user.dob],
  		emailId : [this.user.emailId, [Validators.required, Validators.email] ],
  		contactNo : [this.user.contactNo, Validators.required]
  		
  	});

  this.updateForm.valueChanges
    .subscribe(data => this.onValueChanged(data));
 
  this.onValueChanged();

  }

  updateUser() {
    //this.submitted = true;
    this.updatedUser = this.updateForm.value;
    this.updatedUser.gender = this.user.gender;
    this.updatedUser.password = this.user.password;

    if(this.imageUrl == null) {
      this.updatedUser.profilePhoto = this.user.profilePhoto;
    }
    else {
      this.updatedUser.profilePhoto = this.imageUrl;
    }
    console.log(this.user.password);
    console.log(this.updatedUser);
    console.log(this.updatedUser.profilePhoto);
    this.updateProfileService.updateUserProfile(this.updatedUser)
    .subscribe((msg : string) => this.message = msg);
      //errorMsg => this.errorMessage = errorMsg);

    //console.log(this.errorMessage);
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
    'firstName': '',
    'lastName': '',
    'emailId': '',
    'contactNo': ''
  };
 
  validationMessages = {
     'firstName': {
      'required': 'First Name is required.'
    },
    'lastName': {
      'required': 'Last Name is required.'
    },
    'emailId': {
      'required': 'Email Id is required.',
      'email': 'Email Id is incorrect.'
    },
    'contactNo': {
      'required': 'Contact number is required.'
    }
  };
}