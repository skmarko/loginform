import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';
import {  FormBuilder ,FormGroup, Validators } from '@angular/forms';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loginform';

formdata:FormGroup
submitted= false

constructor( private formBuilder:FormBuilder,private myservice:MyserviceService){}

ngOnInit(){
  this.formdata=this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(8)]]
  });
  
}

get f(){ return this.formdata.controls;}
onSubmit(){
  this.submitted=true;
  if(this.formdata.invalid){
    return;
  }
  //console.log(this.formdata.value);
  let response=this.myservice.auth(this.formdata.value.email,this.formdata.value.password);
   if(response==1)
   {
     alert('login success');
   }
   else{
    alert('login unsuccess');
   }
}


}
