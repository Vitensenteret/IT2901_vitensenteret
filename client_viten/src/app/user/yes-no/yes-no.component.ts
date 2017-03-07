import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestionObject } from '../../_models/survey';

@Component({
  selector: 'app-yes-no',
  templateUrl: './yes-no.component.html',
  styleUrls: ['./yes-no.component.scss']
})
export class YesNoComponent implements OnInit {
  @Input() questionObject: QuestionObject;
  @Output() answer = new EventEmitter();
  selectedAnswer: number;

  constructor() { }

  ngOnInit() {
  }

// This method selects the thumb-answer and calls addChange()
  selectAnswer(selectedAnswer){
    this.selectedAnswer = selectedAnswer;
    this.addChange(this.selectedAnswer);
  }

  // This method emits the changes to its parent. The parent HTML listens for $event changes and call the addOrChangeAnswer(alt)
  addChange(alt){
    console.log('Answer changed');
    this.answer.emit(alt);
  }

}
