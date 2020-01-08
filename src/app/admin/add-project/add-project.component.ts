import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  uploadedFiles: any[] = [];
  fileData: File = null;
  previewUrl:any = null;
  constructor() { }

  ngOnInit() {
  }

//   onUpload(event) {
//     debugger;
//     //for(let file of event.files) {
//         this.uploadedFiles.push(event.files[0]);
//     //}


// }
onSelect(event){
  debugger;
  this.fileProgress(event.files);
  console.log(this.uploadedFiles);
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

}
