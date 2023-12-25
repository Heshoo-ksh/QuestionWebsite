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

  constructor(private router: Router) {}
  navigateToYes(): void {
    this.router.navigate(['/yes']);
  }

  dodgeNoButton() {
    this.dodgeCount++;

    const noButton = document.getElementById('noButton');
    if (!noButton) return;

    if (this.dodgeCount < 7) {
      const safeZone = 15;

      let randomX = safeZone + Math.random() * (100 - safeZone * 2);
      let randomY = safeZone + Math.random() * (100 - safeZone * 2);
      
      if (randomX < 5) {
        randomX = 5;
      }
      if (randomY < 15) {
        randomY = 15;
      }

      noButton.style.position = 'absolute';
      noButton.style.left = `${randomX}%`;
      noButton.style.top = `${randomY}%`;
      noButton.style.transition = 'left 0.5s ease, top 0.5s ease';
    } else {
      this.router.navigate(['/no']);
    }
  }
}
