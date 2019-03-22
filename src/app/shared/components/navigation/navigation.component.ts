import { Component, OnInit } from '@angular/core';
import { Link } from '../../model/app.model';

const navLink: Link[] = [
  { name: "Users", link: "users" },
  { name: "Authorization", link: "authorization" },
  { name: "Admin", link: "/admin" }
];

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public links: Link[];

  constructor() { }

  ngOnInit() {
    this.links = navLink;
  }

}
