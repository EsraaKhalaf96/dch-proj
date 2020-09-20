import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-password-manager',
  templateUrl: './password-manager.component.html',
  styleUrls: ['./password-manager.component.scss']
})
export class PasswordManagerComponent implements OnInit {
  options: SelectItem[];
  selectedOption: any;
  selectedOption2: any;
  selectedOption3: any;
  value:number = 0
  constructor() { }

  ngOnInit() {
    this.options = [
      { label: 'Off', value: "0" },
      { label: 'On', value: "1" },
    ];
  }

  handleMinus(){
    this.value--;
    if(this.value < 0){
      this.value = 0;
    }
  }

  handlePlus(){
    this.value++;  
  }
}
