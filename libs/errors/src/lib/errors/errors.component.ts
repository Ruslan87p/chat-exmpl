import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'apps/chat-gpt-example/src/app/layout/api.service';

@Component({
  selector: 'app-errors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './errors.component.html',
  styleUrl: './errors.component.css',
})
export class ErrorsComponent {

  @Input() error!: string;
  constructor(readonly errorSvc: ApiService) {}
}
