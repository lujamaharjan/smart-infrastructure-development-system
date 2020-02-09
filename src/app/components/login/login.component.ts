import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(

    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }


  ngOnInit() {
  }

  onSubmit() {

    console.log(this.email, this.password)
    this.authService.login(this.email, this.password)
      .then(res => {
        console.log("i am loggedin")
        this.flashMessage.show("Logged In", {
          cssClass: 'alert-success', timeout: 3000
        });

        this.router.navigate(['/voteme'], { replaceUrl: false });

      })
      .catch(err => {
        this.flashMessage.show(err.message, {
          cssClass: 'alert-danger', timeout: 3000
        });
      });
  }

}

