import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class UserService{
    users:{id:number;name:string,lastName:string}[]= [
        {id:0, name: 'John', lastName: 'Black'},
        {id:1, name: 'Taner', lastName: 'Saydam'},
        {id:2, name: 'Tugay', lastName: 'Saydam'},
      ];

      constructor(){
        
      }
      getUser(id:number):{id:number;name:string,lastName:string}{

        const user=this.users.filter(user => user.id === id)
        return user[0]
      }
}