import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-cb-team',
  templateUrl: './cb-team.component.html',
  styleUrls: ['./cb-team.component.css']
})
export class CbTeamComponent implements OnInit {
  form!: FormGroup;
  dataSource: any;
  stateData: any;
  countryData: any;
  designationData: any;
  editFlag:boolean=false;

  constructor(private api: ApiService, private fb: FormBuilder) { }
  displayedColumns = ['SrNo', 'PersonName', 'MobileNo', 'Designation', 'City', 'Date','Action']
  ngOnInit(): void {
    this.getAllData();
    this.createForm();
    this.getStateDropdown();
    this.getCountryDropdown();
    this.getDesignationDropdown();
  }
  
  
  get f() { return this.form.controls }
  createForm() {
    this.form = this.fb.group({
      
      personName: [''],
      mobileNo: [''],
      emailId: [''],
      dob: [''],
      address: [''],
      city: [''],
      pinCode: ['',Validators.required],
      
      state: [''],
      country:[''],
      designation: ['']
    
    })
  }


  getAllData() {
    this.api.getData().subscribe((res: any) => {

      this.dataSource = res.responseData.data;
    })
  }
  getCountryDropdown() {
    this.api.getCountry().subscribe((res: any) => {
      this.countryData = res.responseData;
      //console.log(this.countryData);
    })
  }

  getStateDropdown() {
    this.stateData=[];
    this.api.getState().subscribe((res: any) => {
      this.stateData = res.responseData;
      //console.log(this.stateData);

    })
  }

  getDesignationDropdown() {
    this.api.getDesignation().subscribe((res: any) => {
      this.designationData = res.responseData;
    })
  }

  onSubmit() {
   
    if(!this.editFlag){   
      let obj = this.form.getRawValue();
      let obj1 = {
        "createdBy": "USER202203041214524702060",
        "createdDate": "2022-08-31T06:01:24.107Z",
        "isDeleted": false,
        "modifiedBy": "",
        "modifiedDate": "2022-08-31T06:01:24.107Z",
        "personName": obj.personName,
        "mobileNo": obj.mobileNo,
        "emailId": obj.emailId,
        "dob": obj.dob,
        "address": obj.address,
        "city": obj.city,
        "pinCode": obj.pinCode,
        "uid": "",
        "state":obj.state ,
        "country":obj.country,
        "designation": obj.designation
      
    }  
    this.api.saveData(obj1).subscribe((res: any) => {
          if (res.statusCode == 200) {
        this.getAllData();
      }
    })
    }else{
      let obj = this.form.getRawValue();
      let obj1 = {
        "createdBy": "USER202203041214524702060",
        "createdDate": "2022-08-31T06:01:24.107Z",
        "isDeleted": false,
        "modifiedBy": "",
        "modifiedDate": "2022-08-31T06:01:24.107Z",
        "personName": obj.personName,
        "mobileNo": obj.mobileNo,
        "emailId": obj.emailId,
        "dob": obj.dob,
        "address": obj.address,
        "city": obj.city,
        "pinCode": obj.pinCode,
        "uid": obj.uid,
        "state":obj.state ,
        "country":obj.country,
        "designation": obj.designation
      
    }
      this.api.updateData(obj1).subscribe((res:any)=>{
        // if (res.statusCode == 200) {
        //   this.getAllData();
        // }
        this.getAllData();

      })
    }
    
    this.form.reset();
  }
  onEdit(data:any)
  {
    this.editFlag=true;
     this.form.patchValue({
      createdBy: data.createdBy,
      createdDate: data.createdDate,
      isDeleted: data.isDeleted,
      modifiedBy: data.modifiedBy,
      modifiedDate: data.modifiedDate,
      cbTeamId: data.cbTeamId,
      personName:data.personName,
      mobileNo:data.mobileNo,
      emailId: data.emailId,
      dob: data.dob,
      address: data.address,
      city:data.city,
      pinCode:data.pinCode,
      uid: data.uid,
      state: data.state,
      country: data.country,
      designation: data.designation
     });
    
      console.log(data.state.name);
     this.getStateDropdown();
     this.getCountryDropdown();
     this.getDesignationDropdown();

  }
}