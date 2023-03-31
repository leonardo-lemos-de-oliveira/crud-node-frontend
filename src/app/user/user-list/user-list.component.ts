import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../model/model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [];
  closeResult: any;

  constructor(
    private userService: UserService,
    private modalService: NgbModal
  ) {
    this.userService.getAll().subscribe(data => { this.users = data });
  }

  viewUser(id: number) {
    console.log(id);
  }
}

