import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getElements() {
    let users = localStorage.getItem("regs");
    return (users === null ? [] :JSON.parse(users));
  }

  f(name: any, pass : any, newpass: any, func: string) {
    let users = this.getElements();
    switch (func) {

      case 'signup':
        if (users.some((e : any) => {return e.username === name.value })) {
          console.log("Already exists")
        }
        else {
          localStorage.setItem('regs', JSON.stringify(
          [...users, { "username" : name.value, "password": pass.value}]
          ));
        }
        break;
      case 'login':
        if (users.some((e : any) => {return e.username === name.value && e.password === pass.value})) {
          localStorage.setItem('current', JSON.stringify(
            [{ "username" : name.value}]
            ));
        } else {
          console.log("Wrong username or password")
        }
        break;
      case 'reset':
        let newUsers = users.map((e: any) => {
          if (e.username === name.value && e.password === pass.value)
          {return {"username": name.value, "password": newpass.value}} else {return e;}
        });
        localStorage.setItem('regs', JSON.stringify(
          [...newUsers]
          ));

        break;
      default:
          console.log("Function not recognised")
    }
  }



}
