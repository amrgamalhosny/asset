import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { readFile } from 'fs';
import { SelectorContext } from '@angular/compiler';
import { ProjectsService } from 'src/app/shared/services/projects.service';




@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  uploadedFiles: any[] = [];
  fileData: File = null;
  previewUrl: any = null;

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

  clients;
  projecttypes;
  regions;


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
  classesFile: any;


  constructor(private fb: FormBuilder, private addProject: ProjectsService) {
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
      addTabletMockup: this.fb.array([]),
      bannertest: ['']
    });

    this.cities1 = [
      { label: 'Select City', value: null },
      { label: 'New York', value: 'Nyc' },
      { label: 'Rome', value: 'rome' },
      { label: 'London', value: 'london' },
      { label: 'Istanbul', value: 'ist' },
      { label: 'Paris', value: 'paris' }
    ];

    this.clients = [
      { label: 'Select Client', value: null },
      { label: 'Vodafone', value: 'vodafone' },
      { label: 'Etisalat', value: 'etisalat' },
      { label: 'Orange', value: 'orange' }
    ];

    this.projecttypes = [
      { label: 'Select Type', value: null },
      { label: 'Telecommunication', value: 'Telecommunication' }
    ];

    this.regions = [
      { label: 'Select Country', value: null },
      { label: 'Egypt', value: 'Egypt' },
      { label: 'KSA', value: 'KSA' },
      { label: 'UAE', value: 'UAE' },
      { label: 'UK', value: 'UK' }

    ];
  }
  ngOnInit() {
    this.es = {
      firstDayOfWeek: 1,
      dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
      dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
      monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
      today: 'Hoy',
      clear: 'Borrar'
    }

    // this.tr = {
    //     firstDayOfWeek : 1
    // }

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
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
    this.invalidDates = [today, invalidDate];
  }

  //   onUpload(event) {
  //     debugger;
  //     //for(let file of event.files) {
  //         this.uploadedFiles.push(event.files[0]);
  //     //}


  // }

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

    const formData = new FormData();
    formData.append('banner', this.myForm.get('banner').value);
    formData.append('name', this.myForm.get('projectName').value);
    formData.append('clientName', this.myForm.get('clientName').value);
    formData.append('desc', this.myForm.get('projectDesc').value);
    formData.append('industry', this.myForm.get('industry').value);
    formData.append('type', this.myForm.get('type').value);
    formData.append('region', this.myForm.get('region').value);
    formData.append('date', this.myForm.get('date').value);
    if (this.imgURL.length > 0) { console.log("sending laptop"); formData.append('laptop', JSON.stringify(this.myForm.get('addLaptopMockup').value)); }
    if (this.mobileURL.length > 0) {console.log("sending mobile");  formData.append('mobile', JSON.stringify(this.myForm.get('addMobileMockup').value)); }
    if (this.tabletURL.length > 0) {console.log("sending tablet");  formData.append('tablet', JSON.stringify(this.myForm.get('addTabletMockup').value)); }

    this.addProject.uploadFile(formData).subscribe(
      (res) => {
        // console.log("res status ", res.status);
        // console.log("res project id ", res.projectId);
        console.log("array: ", res);
      },
      (err) => {
        console.log(err.error.text);
      }
    );

    // let projID = "";
    // this.addProject.uploadFile(formData).subscribe(
    //   (res) => {
    //     console.log("res status ", res.status);
    //     console.log("res project id ", res.projectId);
    //     projID = res.projectId;
    //     console.log(res);
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );






  }

  createItem(url): FormGroup {

    console.log("url in create item: ", url);
    let formArr = this.fb.group({
      title: new FormControl(''),
      description: new FormControl(''),
      img: new FormControl('')
    });
    formArr.get('img').setValue(url + "");
    return formArr;
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
      // console.log("loading");
      if (reader.result) {
        this.imgURL[this.size] = (reader.result + "");

        this.size++;
      }
    }

    reader.onloadend = (_event) => {
      this.addLaptopMockup = this.myForm.get('addLaptopMockup') as FormArray;
      console.log("reader res: ", reader.result);
      this.addLaptopMockup.push(this.createItem(reader.result));
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
    reader.onloadend = (_event) => {
      this.addMobileMockup = this.myForm.get('addMobileMockup') as FormArray;
      this.addMobileMockup.push(this.createItem(reader.result));
    }

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
    reader.onloadend = (_event) => {
      this.addTabletMockup = this.myForm.get('addTabletMockup') as FormArray;
      this.addTabletMockup.push(this.createItem(reader.result));
    }

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

  mySelector(event) {
    for (let file of event.files) {
      console.log("myselector", file);
      this.myForm.get('banner').setValue(file);

    }
  }




}
