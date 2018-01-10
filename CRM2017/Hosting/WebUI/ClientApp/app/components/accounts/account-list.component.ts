import { Component } from '@angular/core';
import { IAccountList } from './AccountList'

@Component({
    selector: 'crm-accounts',
    templateUrl: './account-list.component.html'
})
export class AccountListComponent {
    pageTitle: string = "Account List"
    accounts: IAccountList[] = [
        {
            "srNo": 1,
            "name": "Vijender Kumar",
        },
        {
            "srNo": 2,
            "name": "Parth Kumar",
        }
        ];
    constructor() {        
    }
}
