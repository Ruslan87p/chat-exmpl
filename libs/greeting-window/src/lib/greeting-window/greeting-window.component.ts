import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-greeting-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './greeting-window.component.html',
  styleUrl: './greeting-window.component.scss',
})
export class GreetingWindowComponent {}
