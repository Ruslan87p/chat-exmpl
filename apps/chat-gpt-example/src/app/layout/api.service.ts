import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, Subject, catchError, throwError } from 'rxjs';
import { LoaderStateService } from '@app/loader'

// export class Prompts {
//   id: number;
//   prompt: string;
//   constructor(data: Prompt) {
//       this.id = data.id;
//       this.prompt = data.prompt;
//   }
// }


export interface Prompt {
  id: number,
  prompt: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:3000'
  dialog$ = new Subject<Prompt[]>()
  error = signal<string>('')


  constructor(private http: HttpClient,
  private loadingSvc: LoaderStateService) { }

  headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')


  update(prompt: Prompt): Observable<Prompt[]> {
    const req = {
      id: Math.floor(Math.random() * 100),
      prompt
    }
    return this.http.post<Prompt[]>(`${this.baseUrl}/prompts`, req, { 'headers': this.headers })
  }


  getAnswer(): Observable<Prompt[]> {
    return this.http.get<Prompt[]>(`${this.baseUrl}/answers`, { 'headers': this.headers })
    .pipe(
      catchError((err) => {
        this.error.set(err.message);
        this.loadingSvc.disable()
        return throwError(err);
      })
    );;
  }



  getResponse() {
    return this.getAnswer().subscribe((answer: Prompt[]) => this.dialog$.next(answer))
  }

}
