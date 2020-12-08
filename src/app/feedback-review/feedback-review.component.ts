import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FeedbackService } from '../shared/feedback.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import { Feedback } from '../shared/feedback.model';



declare var M:any;
@Component({
  selector: 'app-feedback-review',
  templateUrl: './feedback-review.component.html',
  styleUrls: ['./feedback-review.component.css'],
  providers: [FeedbackService]
})
export class FeedbackReviewComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';


  constructor(public feedbackService: FeedbackService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.resetForm();
    //this.refreshFeedbackList();
    setInterval(()=>{
      this.refreshFeedbackList()
    },1000);
  }

  resetForm(form?: NgForm){
    if(form)
      form.reset();
      this.feedbackService.selectFeedback ={
        _id: "",
        username: "",
        eventname: "",
        eventreview:""
      }
      

  }

  onSubmit(form:NgForm){
    console.log('In submit');
    console.log(form.value);
    if(form.value.username === "" && form.value.eventname === "" && form.value.eventreview === "")
    {
      alert("Please enter all the required fields");
      return;
    }
    this.feedbackService.postFeedback(form.value).subscribe((res)=>{
      console.log(res);
      this.resetForm(form);
      this.openSnackBar("Review Posted","");
      this.refreshFeedbackList();
    });

  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000, horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
}

  refreshFeedbackList(){
    
    return this.feedbackService.getFeedbackList().subscribe((res)=>{
      this.feedbackService.feedbacks = res as Feedback[];
    });

    
  }
}