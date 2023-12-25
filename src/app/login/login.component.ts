import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [CommonModule, FormsModule],
  standalone: true,

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  enteredUsername = '';
  enteredPassword = '';
  loginMessage = '';

  constructor(private router: Router) {}

  login() {
    const correctUsernames = ['ZAHOORA', 'ZEEZZO', 'ZEEZZOO', 'ZZEEZZOO'];
    const correctPasswords = [
      'BLAH',
      'BLAHH',
      'BLAHHHH',
      'BLAHHHH',
      'BLAHHHHH',
    ];

    // Check if both fields are filled in
    if (!this.enteredUsername.trim() || !this.enteredPassword.trim()) {
      this.loginMessage = '* Fill in both fields, you smarto!😂';
      return;
    }

    // Convert entered data to uppercase for comparison
    const enteredUsernameUpper = this.enteredUsername.toUpperCase();
    const enteredPasswordUpper = this.enteredPassword.toUpperCase();

    // Check if entered username and password are correct
    const usernameMatch = correctUsernames.some(
      (username) => username === enteredUsernameUpper
    );
    const passwordMatch = correctPasswords.some(
      (password) => password === enteredPasswordUpper
    );

    if (usernameMatch && passwordMatch) {
      this.router.navigate(['/main']); // Navigate to the main page
    } else if (!usernameMatch && !passwordMatch) {
      this.loginMessage = '* YOU GOT BOTH WRONG 😒😒😒';
    } else if (!usernameMatch) {
      this.loginMessage = '* Bu-But Its your baby name 🥺🥺🥺';
    } else if (!passwordMatch) {
      this.loginMessage = '* You forgot our TOP Secret 😕';
    }
  }
}