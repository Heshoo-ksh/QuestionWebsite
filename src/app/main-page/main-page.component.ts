import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  constructor(private router: Router) {}

  navigateToYes(): void {
    this.router.navigate(['/yes']);
  }

  navigateToNo(): void {
    this.router.navigate(['/no']);
  }
}
