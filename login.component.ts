import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private _router:Router,private _activatedRoute:ActivatedRoute){
  }

  ngOnInit(): void {
  }
   


geeks()

{
  alert("hlo");
  this._router.navigate(["registration"]);

}
}