import { Component, Input, OnChanges } from '@angular/core';
import { InputService } from '../user-input/input.service';
import { CommonModule } from '@angular/common';
import { InputModel } from '../user-input/input.model';


@Component({
  selector: 'app-table-result',
  imports: [CommonModule],
  templateUrl: './table-result.html',
  styleUrl: './table-result.css'
})
export class TableResult implements OnChanges {
 @Input() receivedInput!: InputModel ;

  outputResults: any[] | null = null;
  constructor(private inputService: InputService) {}

  ngOnChanges() {
    if (this.receivedInput) {
      this.outputResults = this.inputService.calculateInvestmentResults(this.receivedInput);
      console.log('Results calculated:', this.outputResults);
    }
  }
}
