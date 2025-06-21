import { Component } from '@angular/core';
import { MailTableComponent } from "../../components/mail-table-component/mail-table-component";
import { SearchBarComponent } from "../../components/search-bar-component/search-bar-component";

@Component({
  selector: 'app-inbox-view',
  imports: [MailTableComponent, SearchBarComponent],
  templateUrl: './inbox-view.html',
  styleUrl: './inbox-view.css'
})
export class InboxView {

}
