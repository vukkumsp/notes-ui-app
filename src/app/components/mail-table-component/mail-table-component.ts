import { Component, computed, inject } from '@angular/core';
import { InboxSearch } from '../../services/inbox-search-service/inbox-search';

@Component({
  selector: 'app-mail-table-component',
  imports: [],
  templateUrl: './mail-table-component.html',
  styleUrl: './mail-table-component.css'
})
export class MailTableComponent {
  inboxSearchService: InboxSearch = inject(InboxSearch);

  mails: any[] = [
    { id: 1, subject: 'Invoice for Cab Services', description: 'Invoice document attached with mail', sender: 'Cab Services', tags: 'finance'},
    { id: 2, subject: 'Packers and Movers Update', description: 'Location updated for Packers and Movers', sender: 'Packers & Movers', tags: 'logistics'},
    { id: 3, subject: 'Social Media Post', description: 'User123 posted about latest movie', sender: 'Social+', tags: 'social'},
    { id: 4, subject: 'Welcome to the Inbox', description: 'Welcome mail from My Notes App', sender: 'My Notes', tags: 'social'},
    { id: 5, subject: 'Welcome to the Inbox', description: '', sender: '', tags: ''},
    { id: 6, subject: 'Welcome to the Inbox', description: '', sender: '', tags: ''},
    { id: 7, subject: 'Welcome to the Inbox', description: '', sender: '', tags: ''}
  ];

  readonly filteredMails = computed(()=>{
    const filtered = this.inboxSearchService.searchTerm().toLowerCase().trim();
    console.log("filtered : ", filtered);
    return filtered ? this.mails.filter(mail => {
      return (mail.subject.toLowerCase().includes(filtered) ||
              mail.description.toLowerCase().includes(filtered) ||
              mail.sender.toLowerCase().includes(filtered) ||
              mail.tags.toLowerCase().includes(filtered));
    }):this.mails;
  })
}
