import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ListInfo } from '../models/listinfo';
import { FormGroupDirective, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild(FormGroupDirective, {static: false}) myForm1;
  @ViewChild(FormGroupDirective, {static: false}) myForm2;
  addEntry1FormGroup: FormGroup;
  addEntry2FormGroup: FormGroup;
  public addEntryInfo = new ListInfo();
  public form1 = {
    name: new FormControl('', [Validators.required]),
  };
  public form2 = {
    name: new FormControl('', [Validators.required]),
  };
  list1: ListInfo[] = [];
  list2: ListInfo[] = [];
  constructor(
    private fb: FormBuilder,
    private Jarwis: AuthService,
    private snotifyService: ToastrService
  ) {

  }
  createForm() {
    this.addEntry1FormGroup = this.fb.group(this.form1);
    this.addEntry2FormGroup = this.fb.group(this.form2);
  }
  loadData() {
    this.Jarwis.loadData().subscribe(
      data => this.handleLoadData(data),
      error => this.handleError(error)
    );
  }
  handleLoadData(data) {
    this.list1 = data.list1;
    this.list2 = data.list2;
  }
  drop(event: CdkDragDrop<string[]>, listNo) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.addEntryInfo.id = event.previousContainer.data[event.previousIndex]['id'];
      this.addEntryInfo.name = event.previousContainer.data[event.previousIndex]['name'];
      this.addEntryInfo.change = listNo;
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      this.Jarwis.changeList(this.addEntryInfo).subscribe(
        data => this.handleChangeData(),
        error => this.handleError(error)
      );

    }
  }
  handleChangeData() {
    this.loadData();
  }
  ngOnInit() {
    this.loadData();
    this.createForm();

  }
  onSubmit(containerNo) {
    if (containerNo === 1) {
      if (this.addEntry1FormGroup.invalid) {
        return;
      }
      this.addEntryInfo.name = this.form1.name.value;

    } else {
      if (this.addEntry2FormGroup.invalid) {
        return;
      }
      this.addEntryInfo.name = this.form2.name.value;
    }
    this.addEntryInfo.change = containerNo;

    this.snotifyService.clear();
    this.snotifyService.info('Please Wait...', '', {
      timeOut: 5000,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing',
    });

    this.Jarwis.addEntry(this.addEntryInfo).subscribe(
      data => this.handleData(containerNo),
      error => this.handleError(error)
    );
  }
  handleError(error) {
    this.snotifyService.clear();
    this.snotifyService.error('Unable to Add Entry');
  }
  handleData(containerNo) {
    this.snotifyService.clear();
    this.snotifyService.success('Entry Added Successfully');
    if (containerNo === 1) {
      this.myForm1.resetForm();

    } else {
      this.myForm2.resetForm();
      this.form2.name.setValue('');
    }
    this.loadData();
  }

  getNameError(containerNo) {
    if (containerNo === 1) {
      return this.form1.name.hasError('required') ? 'You must enter Name' : '';

    } else {

      return this.form2.name.hasError('required') ? 'You must enter Name' : '';

    }
  }
}
