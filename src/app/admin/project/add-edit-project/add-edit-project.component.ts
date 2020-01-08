import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from "@angular/forms";
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-add-edit-project',
  templateUrl: './add-edit-project.component.html',
  styleUrls: ['./add-edit-project.component.css']
})
export class AddEditProjectComponent implements OnInit {

  public imagePath;

  imgURL: Array<string> = [];
  mobileURL: Array<string> = [];
  tabletURL: Array<string> = [];

  size = 0;
  mobileSize = 0;
  tabletSize = 0;

  myForm: FormGroup;

  addLaptopMockup: FormArray;
  addMobileMockup: FormArray;
  addTabletMockup: FormArray;

  uploadedFiles: any[] = [];

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      addLaptopMockup: this.fb.array([]),
      addMobileMockup: this.fb.array([]),
      addTabletMockup: this.fb.array([])
    })

  }

  ngOnInit() {
  }

  onFileChanged(event) {
    const file = event.target.files[0];
    console.log("file: " + file);
  }

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  onSubmit() {
    alert(JSON.stringify(this.myForm.value));
  }

  createItem(url): FormGroup {
    return this.fb.group({
      title: '',
      description: '',
      img: url
    });
  }

  addLaptop(files): void {

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      // this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);

    reader.onload = (_event) => {
      console.log("loading");
      if (reader.result) {
        this.imgURL[this.size] = (reader.result + "");
        this.size++;
      }
    }

    reader.onloadend = (_event) => {
      console.log(files[0]);
      this.addLaptopMockup = this.myForm.get('addLaptopMockup') as FormArray;
      this.addLaptopMockup.push(this.createItem(files[0]));
    }

  }

  addMobile(files): void {
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      // this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);

    reader.onload = (_event) => {
      console.log("loading");
      if (reader.result) {
        this.mobileURL[this.mobileSize] = (reader.result + "");
        this.mobileSize++;
      }
    }

    this.addMobileMockup = this.myForm.get('addMobileMockup') as FormArray;
    this.addMobileMockup.push(this.createItem(files[0]));
  }

  addTablet(files): void {
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      // this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);

    reader.onload = (_event) => {
      console.log("loading");
      if (reader.result) {
        this.tabletURL[this.tabletSize] = (reader.result + "");
        this.tabletSize++;
      }
    }

    this.addTabletMockup = this.myForm.get('addTabletMockup') as FormArray;
    this.addTabletMockup.push(this.createItem(files[0]));
  }

  remove(index): void {
    this.imgURL.splice(index, 1);
    this.addLaptopMockup.removeAt(index);
    this.size--;
  }

  removeMobile(index): void {
    this.mobileURL.splice(index, 1);
    this.addMobileMockup.removeAt(index);
    this.mobileSize--;
  }

  removeTablet(index): void {
    this.tabletURL.splice(index, 1);
    this.addTabletMockup.removeAt(index);
    this.tabletSize--;
  }

}