import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
   exibirLogo:boolean = true;

  itensMenu = [
    {label : "Home", link:"/"},
    {label : "login", link:"/login"}
  ];
}