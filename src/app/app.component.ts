import { Component, OnInit } from '@angular/core';
import { USER } from './core/user';
import { MasterService } from './service/master.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userObj: USER = new USER()

  userList: USER[] = [];

  cityList$: Observable<string[]> = new Observable<string[]>();
  stateList$: Observable<string[]> = new Observable<string[]>();

  constructor(private master: MasterService) { }

  ngOnInit(): void {
    this.cityList$ = this.master.getCity();
    this.stateList$ = this.master.getState();
  }

  getUserList() {
    this.master.getUser().subscribe((res: USER[]) => {
      this.userList = res;
    })
  }

  onSaveUser() {
    this.master.addUser().subscribe((res: any) => {
      alert("update succesfully")
      this.userList.unshift(this.userObj);
    })
  }

  onDelete(id:number){

    const isDelete = ("are you want to delete");
    if(isDelete){
      this.master.deleteUser(id).subscribe((res: any) => {
        alert("delete succesfully")
      })
    }

  }

  onEdit(data:USER){
    this.userObj = data;
  }








}
