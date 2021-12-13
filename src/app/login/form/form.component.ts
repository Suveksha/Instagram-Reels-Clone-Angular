import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private formBuilder:FormBuilder){}

  loginForm=this.formBuilder.group({
    email:[''],
    password:['']
  })

  saveForm()
  {
    console.log(this.loginForm.value)
  }

  ngOnInit(): void {
  }

}
