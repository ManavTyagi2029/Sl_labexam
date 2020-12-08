import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Feedback } from './feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  selectFeedback: Feedback;
  feedbacks: Feedback[];
  readonly baseURL = 'http://localhost:3000/Books';

  constructor(private http: HttpClient) { }

  postFeedback(fb: Feedback){
    return this.http.post(this.baseURL,fb);

  }

  getFeedbackList(){
    return this.http.get(this.baseURL);
  }
}
