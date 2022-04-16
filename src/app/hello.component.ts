import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
  <table >
  <tr>
    <th>Name</th>
    <th>Username</th>
    <th>email</th>
    <th>city</th>
  </tr>
  <tr *ngFor="let us of UserDetail" >
    <td>{{us.name}}</td>
    <td>{{us.username}}</td>
    <td>{{us.email}}</td>
    <td>{{us.address.city}}</td>
  </tr>
 
</table>
  `,
  styles: [`h1 { font-family: Lato; }
  table, th, td {
    border: 1px solid black;
  }
  table{
    background-color:aqua;
  }
  th{
    background-color:yellow; 
  }
  `],
})
export class HelloComponent {
  @Input() UserDetail: any;
}
