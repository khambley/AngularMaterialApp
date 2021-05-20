import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clients-new',
  templateUrl: './clients-new.component.html',
  styleUrls: ['./clients-new.component.scss']
})
export class ClientsNewComponent implements OnInit {
  firstFormGroup:FormGroup;
  secondFormGroup:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      clientNameCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      address1Ctrl: ['', Validators.required]
    });
  }

}
