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
  dodgeCount = 0;

  constructor(private router: Router) { }
  navigateToYes(): void {
    this.router.navigate(['/yes']);
  }

  dodgeNoButton() {
    this.dodgeCount++;

    const noButton = document.getElementById('noButton');
    if (!noButton) return;

    if (this.dodgeCount < 5) {
      // Calculate available space for movement, taking into account a safe zone
      const safeZone = 10; // Percentage of the viewport used as a safe margin

      // Generate random positions within the constraints
      const randomX = safeZone + Math.random() * (100 - safeZone * 2);
      const randomY = safeZone + Math.random() * (100 - safeZone * 2);

      // Apply the random position using the top and left properties as percentages
      noButton.style.position = 'absolute';
      noButton.style.left = `${randomX}%`;
      noButton.style.top = `${randomY}%`;
      noButton.style.transition = 'left 0.5s ease, top 0.5s ease';
    } else {
      // After the button has dodged 5 times, navigate to the "No" page
      this.router.navigate(['/no']);
    }
  }
}
