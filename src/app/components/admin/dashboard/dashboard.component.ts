import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../../services/users.service";
import { User } from "../../../models/Users";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: User[];
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(data => (this.users = data));

  }

}