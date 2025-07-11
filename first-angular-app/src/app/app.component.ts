import {Component} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {DUMMY_USERS} from './dummy-users';
import {TasksComponent} from './tasks/tasks.component';
import {User} from './user/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    TasksComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public users: User[] = DUMMY_USERS;

  public selectedUserId?: string;

  public get selectedUser(): User | undefined {
    return this.users.find(user => user.id === this.selectedUserId);
  }

  public onSelectUser(id: string): void {
    this.selectedUserId = id;
  }

}
