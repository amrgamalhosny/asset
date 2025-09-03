import { Component, OnInit } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'asset-portfolio';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    // Theme service is initialized automatically via constructor
  }
}
