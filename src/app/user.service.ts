import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  domain:any = 'https://users-api-qbc4.onrender.com/contact/'
  // domain:any = 'https://github.com/sheetalmore7111/IVTASK-RraectForm/'
  
  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get(`${this.domain}contacts`)
  }

  addUsers(body:any){
    return this.http.post(`${this.domain}createContact`, body)
  }

  deleteUser(id:number){
    return this.http.delete(`${this.domain}delete/`+id )
  }

  getUserById(id:any){
    return this.http.get(`${this.domain}contacts/`+id);
  }

  updateUser(id:any,body:any){
    return this.http.put(`${this.domain}update/`+id ,body);
  }

}
