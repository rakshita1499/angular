import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:`<p>Gun Training</p>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  salary:number= 60000.123456;
  completionDate= new Date(2021,5,2)
  project:any={
    name:"Project Manager",
    version:"1.0",
    completionDate: new Date(2021,5,2)
    };
    showAlert():void{
      alert("You clicked me!!");
      }

      products:any[]=[
        {id:101,name:"Product1",price:"100",martialStatus:"Married"},
        {id:102,name:"Product2",price:"101",martialStatus:"NMarried"},
        {id:103,name:"Product3",price:"102",martialStatus:"Married"}
        ];

        inputNo?:number=2;

        key:string='Name';

  myItem!: string | null;

  storeName(){

    localStorage.setItem(this.key,'Raghu');

    this.myItem = localStorage.getItem(this.key)
}

display(){

  return localStorage.getItem(this.key);
}

// showSavedVal:any='';
// setVal():void{
// localStorage.setItem('keyInLocal','Hello');
// }
// getVal():void{
// this.showSavedVal = localStorage.getItem('keyInLocal');
// }

user:any={
  firstname:'',
  password:''
  };
  onSubmitTemplateBased(user:any) {
  console.log(user);
  }



form = new FormGroup({
  "firstName": new FormControl("", Validators.compose([Validators.required,Validators.minLength(3)])),
  "password": new FormControl("", Validators.required),
  });
  onSubmit() {
  console.log("reactive form submitted");
  console.log(this.form.value);
  }
  reset() {
  this.form.reset();
  }
}