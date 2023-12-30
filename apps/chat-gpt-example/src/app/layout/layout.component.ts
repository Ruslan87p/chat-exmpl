import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromptInputComponent, ToggleService } from '@app/prompt-input'
import { ChatWindowComponent } from '@app/chat-window'
import { GreetingWindowComponent } from '@app/greeting-window'
import { HttpClientModule } from '@angular/common/http';
import { ApiService, Prompt } from './api.service'
import { ErrorsComponent } from '@app/errors';
import { LoaderComponent, LoaderStateService } from '@app/loader';

@Component({
  selector: 'app-layout',
  standalone: true,
  providers: [ApiService, ToggleService, LoaderStateService],
  imports: [CommonModule,
    HttpClientModule,
    PromptInputComponent,
    ChatWindowComponent,
    GreetingWindowComponent,
    ErrorsComponent,
    LoaderComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {

  question!: Prompt;
  toggleChat!: boolean;
  isLoading!: boolean;
  error!: string;
  constructor(public toggle: ToggleService,
    readonly loadingSvs: LoaderStateService,
    readonly errorSvc: ApiService) {
    this.isLoading = this.loadingSvs.isLoading();
    this.error = this.errorSvc.error();
  }


  geQuestion(question: Prompt) {
    this.question = question;
    this.isLoading = this.loadingSvs.isLoading();
  }

}
