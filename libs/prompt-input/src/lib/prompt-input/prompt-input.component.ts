import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '@app/button'
import { ButtonStateService } from "./button-state.service"
import { ApiService, Prompt } from "apps/chat-gpt-example/src/app/layout/api.service"
import { ResizeAreaDirective } from './resize-area.directive';
import { ToggleService } from './toggle.service';
import {LoaderStateService} from '@app/loader'



@Component({
  selector: 'app-prompt-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, ResizeAreaDirective],
  providers: [ButtonStateService],
  templateUrl: './prompt-input.component.html',
  styleUrl: './prompt-input.component.scss',
})

export class PromptInputComponent implements OnInit {

form!: FormGroup;
icon = '/assets/icons/arrow-up.svg'
type = 'submit';
tooltipTest = 'Send message';
isDisabled = this.bntSvc.buttonDisabled();
@Output() question: EventEmitter<Prompt> = new EventEmitter<Prompt>();

constructor(
  private formBuilder: FormBuilder,
  private bntSvc: ButtonStateService,
  private apiSvc: ApiService,
  private toggle: ToggleService,
  private isLoading: LoaderStateService) {}

private createForm(){
  this.form = this.formBuilder.group({
    prompt: [''],
  });
}

private getPromptValue() {
  this.form.valueChanges.subscribe( (res) => {
    return res.prompt ? this.enable() : this.disable()
  })
}

private enable() {
  this.bntSvc.enable();
  this.isDisabled = this.bntSvc.buttonDisabled();
}
private disable() {
  this.bntSvc.disable()
  this.isDisabled = this.bntSvc.buttonDisabled();
}

onEnterSubmit(e: KeyboardEvent) {
  if (e.key !== 'Enter') return;
  this.onSubmit()
  e.preventDefault();
}

onSubmit() {
  if (!this.form.value.prompt) return
  this.question.emit(this.form.value.prompt);
  this.apiSvc.update(this.form.value.prompt).subscribe( () => {
    this.apiSvc.getResponse()
    this.toggle.show();
    this.isLoading.enable()
  })
  this.form.reset();
}

ngOnInit(): void {
  this.createForm();
  this.getPromptValue()
}

}
