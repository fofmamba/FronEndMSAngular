import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  constructor() { }

  logIn() {
    // devrait prendre un login et un password en paramètres...
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }

  isAdmin() {
    const isUserAdmin =  new Promise((resolve, reject) => {
      resolve(this.loggedIn);
    });

    return isUserAdmin;
    // return this.loggedIn;
  }
}

/*
  const admin = isAdmin(); // si on avait pas de promesse

  isAdmin().then((admin) => {
    console.log("Est un administrateur : " + admin);
  })
*/
