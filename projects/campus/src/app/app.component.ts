import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.loadCssFile("../assets/css/style1.css")
  }
  title = 'Campus';

   
  loadCssFile(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const linkElement = document.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.type = 'text/css';
      linkElement.href = url;

      linkElement.onload = () => {
        resolve();
      };

      linkElement.onerror = () => {
        reject(new Error(`Failed to load CSS file: ${url}`));
      };

      document.head.appendChild(linkElement);
    });
  }
}
