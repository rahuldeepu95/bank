import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  data = "Your banking partner."
  constructor(private ds: DataService) { }

  register() {
    let userdetails = this.ds.userDetails
  }

}

