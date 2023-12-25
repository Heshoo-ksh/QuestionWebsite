import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-page',
  templateUrl: './no-page.component.html',
  styleUrls: ['./no-page.component.scss'],
})
export class NoPageComponent implements OnInit {
  currentGif = '/assets/first-gif.gif';
  currentMessage = '';
  messages = [
    "Seriously, MEANY? Dodging me like I'm a wanted man! 🙄🙄🙄🙄🙄🙄🙄",
    "I'll rest up for now... But just you wait, Zeezzo. I'll be swinging by your tower soon – I’ll be the Flynn to your Rapunzel before you know it! 😈😈😈",
    "I'll rest up for now... But just you wait, Zeezzo. I'll be swinging by your tower soon – I’ll be the Flynn to your Rapunzel before you know it! 😈😈😈",
  ];
  gifPaths = ['/assets/hourse.gif', '/assets/sleep.gif','/assets/sleep.gif', 'assets/sot.png'];
  gifDuration = 4000; // Duration for each GIF and message
  currentGifIndex = 0;

  ngOnInit() {
    this.updateContent();
  }

  updateContent() {
    this.currentMessage = this.messages[this.currentGifIndex];
    this.currentGif = this.gifPaths[this.currentGifIndex];

    if (this.currentGifIndex < this.gifPaths.length - 1) {
      setTimeout(() => {
        this.currentGifIndex++;
        this.updateContent();
      }, this.gifDuration);
    }
  }
  getAnimationClass(index: number): string {
    switch (index) {
      case 0:
        return 'animate__animated animate__shakeX';
      default:
        return '';
    }
  }
}
