import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  aim="Your perfect banking partner"
  acn2=''
  psw2=''
  userdetails:any={
    1000:{acno:1000,username:"anu",passw:123,balance:0},
    1001:{acno:1001,username:"anu",passw:123,balance:0},
    1002:{acno:1002,username:"anu",passw:123,balance:0},
    1003:{acno:1003,username:"anu",passw:123,balance:0},
  }

  // login(){

  //   var ac=this.acn2
  //   var psw2=this.psw2
  //   var userdetails=this.userdetails

  //   if (ac in userdetails){
  //     if(psw2==userdetails[ac]["passw"]){
  //       alert("login succesfully")
  //     }
  //     else{
  //       alert("incorrect password")
  //     }
  //   }
  //   else{
  //     alert("incorrect username")
  //   }
  // }
  login(a:any,b:any){
    this.acn2=a.value
    this.psw2=b.value

    var ac=this.acn2
    var psw2=this.psw2
    var userdetails=this.userdetails

    if (ac in userdetails){
      if(psw2==userdetails[ac]["passw"]){
        alert("login succesfully")
      }
      else{
        alert("incorrect password")
      }
    }
    else{
      alert("incorrect username")
    }
  }

  // acno(event:any){
  //   this.acn2=event.target.value
  //   // console.log(this.acn2);    //
  // }
  // passwor(event:any){
  //   this.psw2=event.target.value
  //   // console.log(this.psw2);      //we dont want to print
  // }

}
