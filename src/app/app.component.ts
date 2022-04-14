import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsService } from './shared/assignments.service';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Première application angular sur heroku';
   isshow: boolean = false;
  constructor(private authService:AuthService,
    private router:Router,
    private assignmentsService:AssignmentsService) {}

  login() {
    if(!this.authService.loggedIn) {
      this.authService.logIn();
      this.isshow = !this.isshow;
    } else {
      this.authService.logOut();
      this.router.navigate(["/login"]);
      this.isshow = false;
    }
  }

  peuplerBD() {
    this.assignmentsService.peuplerBDAvecForkJoin()
    .subscribe(() => {
      console.log("TOUS LES AJOUTS ONT ETE REALISES");
      // on peut alors afficher la liste
      this.router.navigate(["/home"]);
    })
  }

  logout(){
    this.authService.logOut();
    this.router.navigate(["/home"]);
    this.isshow = !this.isshow;
  }


}
