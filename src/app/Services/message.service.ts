import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private message: string = '';
  constructor() { }

  setMessage(message: string): void {
    this.message = message;
  }

  getMessage(): string {
    const temp = this.message;
    this.message = '';
    return temp;
  }

  clearMessage(): void {
    this.message = '';
  }
}
