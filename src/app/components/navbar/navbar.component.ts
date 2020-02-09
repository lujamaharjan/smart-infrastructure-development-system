import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  auth: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.auth = true;
      }
    });
  }

  logout() {
    if (confirm("Are you sure?")) {
      this.authService.logout();
      this.flashMessages.show("You are logged out", {
        cssClass: "alert-success",
        timeout: 4000
      });
      this.auth = false;
      this.router.navigate(["/"]);
    }
  }

}


