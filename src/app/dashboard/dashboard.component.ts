import { Component } from '@angular/core';
import { UserService } from '../shared/services/';
import { User } from '../shared/models/';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

interface AppState {
    users: Array<User>;
}

@Component({
    templateUrl: './views/dashboard.html',
    styleUrls: ['./styles/dashboard.scss']
})

export class DashboardComponent {
    user: User;
    users: any;
    placement: string;
    placementColor: string;
    profiles: Observable<any>;
    profile: Observable<any>;
    survey: any;

    constructor(
        private _userService: UserService,
        private store: Store<AppState>
    ) {
        // this.users = store.select('users');
        this.store.select('users').subscribe(users => {
            this.users = users;
        });

        this.placement = "PENDING";
        _userService.currentUser
            .subscribe((user: User) => {
                this.user = user;
                // if(user) this.profiles = _profileService.getProfileHistory(user.id);
            });
        _userService.getUsers();
    }

}
