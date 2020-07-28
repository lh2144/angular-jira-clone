import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-btn',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input('class') public class: string = 'btn-primary';
  @Input() public disabled: boolean = false;
  @Input() public type: string = 'button';
  constructor() { }

  public ngOnInit(): void { }

}
