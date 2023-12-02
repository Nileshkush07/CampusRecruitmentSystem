import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  snack: any;
  


  constructor(private login:LoginService,private router:Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  loginData={
    username:"",
    password:""
  };

  formSubmit(){
console.log('login btn clicked');

if(this.loginData.username.trim()=='' || this.loginData.username==null){
    {
      this.snack.open('Username is required !! ', '', {
        duration:3000,
      });
      return ;
    } 
       
}
console.log(this.loginData);
console.log(this.login.generateToken(this.loginData)+"fghjk");

this.login.generateToken(this.loginData).subscribe(
  (data:any)=>{
   console.log('success');
   console.log(data);
   
   //login

      this.login.loginUser(data.token);

      this.login.getCurrentUser().subscribe(
        (user:any)=>{
          this.login.setUser(user);
          console.log(user);

           //redirect admin dashboard
           //redirect normal dashboard

           if(this.login.getUserRole()=='ADMIN'){
            // window.location.href='/admin';
            this.router.navigate(['admin'])
            this.login.loginStatusSubject.next(true);
           }else if(this.login.getUserRole()=='STUDENT'){
            //window.location.href='/user-dashboard';
            this.router.navigate(['student/0'])
            this.login.loginStatusSubject.next(true);
           }else if(this.login.getUserRole()=='COMPANY'){
             //window.location.href='/companydashboard';
              this.router.navigate(['company/0'])
              this.login.loginStatusSubject.next(true);
           }
           else{
                this.login.logout();
                
           }
        }
      );

  },
  (error)=> {
    console.log('Error !');
    console.log(error);
    this.snack.open('Invalid details !! try again', '',{
      duration:3000,
    });
  }
  );
  }
}
