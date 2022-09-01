import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  dataURL = "http://demousermanagement.consultbuddy.com/api/CBTeamMaster/get-cbmaster?pageid=1&rowsperpage=10";
  stateURL = "http://demomaster.consultbuddy.com/api/StateMaster/get-ddl-state_1_0";
  countryURL = "http://demomaster.consultbuddy.com/Country/Management/get-ddl-country_1_0";
  postURL="http://demousermanagement.consultbuddy.com/api/CBTeamMaster/insert";
  updateURL="http://demousermanagement.consultbuddy.com/api/CBTeamMaster/update";
  designationURl = "http://demomaster.consultbuddy.com/Designation/Management/get-ddl-designation_1_0";
    constructor(private http : HttpClient) { }
  
    getData()
    {
      return this.http.get(this.dataURL);
    }
  
    getState()
    {
      return this.http.get(this.stateURL);
    }
  
    getCountry()
    {
      return this.http.get(this.countryURL);
    }
    
    getDesignation(){
      return this.http.get(this.designationURl);
    }
  
    saveData(obj:any)
    {
      return this.http.post(this.postURL,obj);
    }
  
    updateData(obj:any){
      return this.http.put(this.updateURL,obj);
    }
  }