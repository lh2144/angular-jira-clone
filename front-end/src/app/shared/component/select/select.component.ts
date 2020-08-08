import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Option } from 'typings/common';

@Component({
  selector: 'my-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() public control: FormControl;
  @Input() public type: string = 'icon';
  @Input() public options: Option[];
  @Input() public value: string;
  @Input() public multiple: boolean = false;
  public display: any = null;
  public isClicked: boolean = false;
  public toggleDropDown: boolean = false;
  @Output() public valueChange: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  public ngOnInit(): void {
  }

  public toggleClick(val: Option): void {
    this.control.setValue(val.type);
    this.display = this.display ? '' : val;
    this.isClicked = true;
    this.toggleDropDown = !this.toggleDropDown;
  }

}
