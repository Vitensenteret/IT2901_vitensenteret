import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';
import { User } from '../../_models/index';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AuthenticationService } from '../../_services/authentication.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.scss']
})
export class AdminSettingsComponent implements OnInit {

  private userSub;
  private userListSub;
  public  user: User;
  private email = '';
  private userList: User[] = [];
  private selectedRow: number;
  private referralURL = '';

  public  dialogRef: MdDialogRef<DeleteDialog>;

  constructor(
    private router: Router,
    private service: AuthenticationService,
    public dialog: MdDialog,
    public snackBar: MdSnackBar) {

    }



  ngOnInit() {
    this.getUsers();
  }

  requestReferal(role) {
    this.service.getReferral(role)
        .subscribe(result => {
          console.log(result);
          const config: MdDialogConfig = {
            data: {
              referralURL: result,
              role: role,
            }
          };
          this.dialogRef = this.dialog.open(ReferDialog, config);
        });
  }

  getUsers() {
    this.userSub = this.service.getCurrentUserObservable().subscribe(user => {
      this.user = user; // Subscribe and get user from the authService
      console.log(this.user);

    });
    this.userListSub = this.service.getAllUsers().subscribe(users => {
      this.userList = users; // Subscribe and get user from the authService
      console.log(this.userList);
    });
  }

  setSelected(selected: number) {
    this.selectedRow = selected;
  }

  /**
   * Delete the current user
   *
   * Delete the user that is currently loged in
   */
  deleteUser(id: string) {
    if (id === this.user._id) {
      this.openSnackBar('Can\'t delete this user', 'FAILURE');
    } else {
      this.service.deleteAccoutn(id)
          .subscribe(result => {
              if (result === true) {
                  this.getUsers();
                  this.openSnackBar('User has been deleted', 'SUCCESS');
                  // this.router.navigate(['/login']);
              } else {
                  console.error('Error - your account might not have been deleted');
              }
          });
        }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  /**
   * Opens a dialog
   *
   * Promts the user to delete the account or not
   */
  openDialog(id: string) {
    if (id === this.user._id) {
      this.openSnackBar('Can\'t delete current user', 'FAILURE');
    } else {
    this.dialogRef = this.dialog.open(DeleteDialog, {
      disableClose: false
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('result: ' + result);
      if (result === 'yes') {
        this.deleteUser(id);
      }
      this.dialogRef = null;
    });
  }
}

}



/**
 * DeleteDialog
 *
 * Holds dialog logic
 */
@Component({
  selector: 'delete-acccount-dialog',
  template: `
  <h1>Are you sure you want to delete this account?</h1>
  <br>
  <p>Everything will be deleted and unrecoverable!</p>
  <md-dialog-actions>
    <button md-raised-button color="warn"  (click)="dialogRef.close('yes')">Yes, Kill it</button>
    <button md-raised-button color="primary"  md-dialog-close>No I did not mean this!</button>
  </md-dialog-actions>
  `,
  styleUrls: ['./admin-settings.component.scss']
})
export class DeleteDialog {
  constructor(public dialogRef: MdDialogRef<DeleteDialog>) { }
}

/**
 * ReferDialog
 *
 * Holds dialog logic
 */
@Component({
  selector: 'refer-acccount-dialog',
  template: `
  <h1>Refer one {{data.role}}</h1>
  <br>
  <p>A referral link is only active for two weeks</p>
  <md-input-container class="referralField">
    <input class="referralField"
      mdInput placeholder="Referral link"
      value="{{data.referralURL}}"
      [(ngModel)] = "text">
  </md-input-container>
  <button md-raised-button
    class="btn btn-default"
    [class.btn-success] = 'isCopied'
    type="button"
    ngxClipboard
    [cbContent] = 'text'
    (cbOnSuccess) = 'isCopied = true'>
      copy
      <md-icon>content_copy</md-icon>
  </button>
  <md-dialog-actions>
    <button md-raised-button color="primary"  md-dialog-close>OK</button>
  </md-dialog-actions>
  `,
  styleUrls: ['./admin-settings.component.scss']
})
export class ReferDialog {
  public isCopied = false;
  public text = '';
  constructor(public dialogRef: MdDialogRef<ReferDialog>, @Inject(MD_DIALOG_DATA) public data: any) {
    this.setCopyBox(); }

    setCopyBox() {
      this.text = this.data.referralURL;
    }
}