import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, Prompt } from 'apps/chat-gpt-example/src/app/layout/api.service';
import { map } from 'rxjs';
import {LoaderStateService} from '@app/loader'

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.scss',
})
export class ChatWindowComponent implements OnInit {

  answer!: string;
  @Input() question!: Prompt;

  constructor(readonly apiSvc: ApiService, private loaderSvc: LoaderStateService) {}



  getDialog() {
    this.apiSvc.dialog$.pipe(
      map( item => {
          const rebuildedArr = [{
            id: Math.floor(Math.random() * 100),
            prompt: item[0].prompt
          }]
        return rebuildedArr
      }
      )
    ).subscribe( (gptAnswer: Prompt[]) => {
      this.answer = gptAnswer[0].prompt;
        this.loaderSvc.disable()
    })
  }


  ngOnInit(): void {
    this.getDialog();
  }

}
