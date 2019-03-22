import { Component, OnInit } from '@angular/core';

const listCode: string[] = [
  'en', 'ua', 'ru'
]

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss']
})
export class LangComponent implements OnInit {
  public codes: string[];
  public openCode = 'en';
  public open = false;

  constructor() { }

  ngOnInit() {
    this.codes = listCode;
  }

  toggleLang() {
    this.open = !this.open;
  }

  getLang(code: string) {
    console.log(code);
    this.openCode = code;
    this.open = false;
  }

}
