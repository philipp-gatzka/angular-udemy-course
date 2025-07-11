import {Component, EventEmitter, Input, Output} from '@angular/core';

import {User} from './user.model';
import {CardComponent} from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  imports: [
    CardComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required: true}) public user!: User;

  @Input({required: true}) public selected!: boolean;

  @Output() public select: EventEmitter<string> = new EventEmitter<string>();

  public get imagePath(): string {
    return 'assets/users/' + this.user?.avatar;
  }

  public onSelectUser(): void {
    this.select.emit(this.user?.id);
  }

}
