import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
import {SelectItem} from 'primeng/api';
import { readFile } from 'fs';
import { SelectorContext } from '@angular/compiler';




@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  uploadedFiles: any[] = [];
  fileData: File = null;
  previewUrl:any = null;
  
  minDate: Date;

  maxDate: Date;

  es: any;

  invalidDates: Array<Date>
  date3: Date;
  cities1;
  clientName;
  industry;
  projectType;
  region;



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

  
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      banner: new FormControl(''),
      projectName: new FormControl(''),
      projectDesc: new FormControl(''),
      clientName: new FormControl(''),
      industry: new FormControl(''),
      type: new FormControl(''),
      region: new FormControl(''),
      date: new FormControl(''),
      addLaptopMockup: this.fb.array([]),
      addMobileMockup: this.fb.array([]),
      addTabletMockup: this.fb.array([])
    })
    this.cities1 = [
      {label:'Select City', value:null},
      {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
      {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
      {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
      {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
      {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
  ];

  }
  ngOnInit() {
    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
  }

  // this.tr = {
  //     firstDayOfWeek : 1
  // }

  let today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();
  let prevMonth = (month === 0) ? 11 : month -1;
  let prevYear = (prevMonth === 11) ? year - 1 : year;
  let nextMonth = (month === 11) ? 0 : month + 1;
  let nextYear = (nextMonth === 0) ? year + 1 : year;
  this.minDate = new Date();
  this.minDate.setMonth(prevMonth);
  this.minDate.setFullYear(prevYear);
  this.maxDate = new Date();
  this.maxDate.setMonth(nextMonth);
  this.maxDate.setFullYear(nextYear);

  let invalidDate = new Date();
  invalidDate.setDate(today.getDate() - 1);
  this.invalidDates = [today,invalidDate];
}

//   onUpload(event) {
//     debugger;
//     //for(let file of event.files) {
//         this.uploadedFiles.push(event.files[0]);
//     //}


// }
onSelect(event){
    const file = event.target.files[0];
    alert(file);
}

fileProgress(fileInput: any) {
  debugger;
  this.fileData = <File>fileInput.target.files[0];
  console.log(this.fileData);
  this.preview();
}

preview() {
// Show preview 
var mimeType = this.fileData.type;
if (mimeType.match(/image\/*/) == null) {
  return;
}

console.log(mimeType);

var reader = new FileReader();      
reader.readAsDataURL(this.fileData); 
reader.onload = (_event) => { 
  debugger;
  this.previewUrl = reader.result;
  console.log(this.previewUrl);
}
}



onFileChanged(event) {
  const file = event.target.files[0];
  console.log("file: " + file);
}

onUpload(event) {
  for (let file of event.files) {
    alert(event.target.files[0]);
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
  alert(this.imagePath[0].webkitRelativePath);
  debugger;

  reader.onload = (_event) => {
    // console.log("loading");
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
