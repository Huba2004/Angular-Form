import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './adatok-form.component.html',
  styleUrls: ['./adatok-form.component.css']
})
export class FormComponent implements OnInit {

  ngOnInit(): void {
    const currentDate = new Date();
    const eighteenYearsAgo = currentDate.getFullYear() - 18 + "-" + ('0' + (currentDate.getMonth() + 1)).slice(-2) + "-" + ('0' + currentDate.getDate()).slice(-2);
    (<HTMLInputElement>document.getElementById("birthdate")).value = eighteenYearsAgo;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Elküldésre került adattartalom:', form.value);
    } else {
      console.log('Validálási probléma!');
    }
  }

}
