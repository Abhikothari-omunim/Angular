import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';  
import { ChildComponentComponent } from './child-component/child-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink , FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'angular';

  user = {
    firstName: '',
    lastName: '',
    mobile: '',
  };

  ParentMsg:string = "Welcome Here....";
  data = 100;
  data2 = 200;

  isCreatePage = true;

  onSubmit() {
    if (this.user.firstName && this.user.lastName && this.user.mobile) {
      console.log('Form Data:', this.user);
      // Here you can add logic to save the user data
      alert('User data saved successfully!');
      // Reset form
      this.user = { firstName: '', lastName: '', mobile: '' };
    } else {
      alert('Please fill in all fields correctly.');
    }
  }
}
