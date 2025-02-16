import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  texts = [
    "Welcome to my world!",
    "Hi, I'm <span>Den Amiel</span><br />a Software Developer",
    "Passionate about building innovative and scalable solutions, turning ideas into reality with clean and efficient code."
  ];
  displayedText: string[] = ["", "", ""];
  currentIndex = 0;
  isTypingComplete: boolean = false;

  constructor() { }

  ngAfterViewInit(): void {
    this.startTyping(0, 0); // Start from the first text and first character
  }

  startTyping(index: number, charIndex: number) {
    if (index >= this.texts.length) {
      this.isTypingComplete = true;
      return;
    }
  
    let originalText = this.texts[index];
    let result = "";
    let insideTag = false;
    let tagBuffer = "";
  
    const interval = setInterval(() => {
      if (charIndex < originalText.length) {
        const char = originalText[charIndex];
  
        if (char === "<") {
          insideTag = true;
          tagBuffer = char;
        } else if (char === ">") {
          insideTag = false;
          tagBuffer += char;
          result += tagBuffer;
        } else if (insideTag) {
          tagBuffer += char;
        } else {
          result += char;
        }
  
        this.displayedText[index] = result;
        charIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => this.startTyping(index + 1, 0), 20); // Faster transition
      }
    }, 30); // Faster typing speed
  }
}
