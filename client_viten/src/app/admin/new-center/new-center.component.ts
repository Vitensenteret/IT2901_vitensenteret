import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';

import { FileUploader } from 'ng2-file-upload';
import { AuthenticationService } from '../../_services/authentication.service';
import { User } from '../../_models/user';
import { CenterService } from '../../_services/center.service';
import { TranslateService } from '../../_services/translate.service';
import { MdSnackBar } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-new-center',
  templateUrl: './new-center.component.html',
  styleUrls: ['./new-center.component.scss']
})
export class NewCenterComponent implements OnInit {
  public URL = '/api/';






  public uploader: FileUploader = new FileUploader({url: 'http://localhost:2000/api/image/center'});
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;
  private user: User;
  public centers: Object[] = [];
  public selectedCenter: string;
  public centerName: string;
  public currentCenterName: string;


  constructor( private authenticationService: AuthenticationService,
    private centerService: CenterService,
    public dialog: MdDialog,

    public snackBar: MdSnackBar,
    public languageService: TranslateService
) {
    const token = localStorage.getItem('token');
    this.uploader.authToken = token;
    this.user = this.authenticationService.getUser();

    this.centerService.getAllCenters().subscribe(result => {
      this.centers = result;
      this.selectedCenter = localStorage.getItem('center');
      this.centers.forEach(center => {
        if (center['_id'] == this.selectedCenter) {
          this.currentCenterName = center['name'];
        }
      })
    });
  }
  ngOnInit() {
  }


  public _onChange(files: any) {
    // this.user = this.authenticationService.getUser();
    console.log(this.uploader.queue);
    this.uploader.onBuildItemForm = (item, form) => {
      form.append("center", this.selectedCenter);
    };
    this.uploader.queue[0].formData = {'center': ' myval'}
    console.log(this.uploader);
    if (files && files.length > 0) {
     let file: File = files.item(0);
     if (this.user.role == 'sysadmin') {
        // this.uploader.queue[0]._file.name = this.user.role;
        console.log('Admin posting image')
     }
     // Now you can get
     console.log(file.name);
     console.log(file.size);
     console.log(file.type);
   }
   if (this.uploader.queue.length > 1) {
     this.uploader.queue.shift();
   }
  }

  /**
   * Change center name
   * @param {string} name new center name
   */
  public changeCenterName(name: string) {
    this.centerService.centerUpdateCenterName(name)
      .subscribe(result => {
        this.openSnackBar('Name Changed', 'SUCCESS');
      },
      error => {
        this.openSnackBar('Could not change name at this time', 'FAILURE');
        console.error(error);
    });
  }

  /**
   * Changes the exit-survey password
   * @param  {string} password new password
   */
  changeExitSurveyPassword(password: string) {
    this.centerService.exitSurveyUpdatePassword(password)
      .subscribe(result => {
        this.openSnackBar(this.languageService.instant('Password changed'), 'SUCCESS');
      },
      error => {
        this.openSnackBar(this.languageService.instant('Could not change your password'), 'FAILURE');
        console.error(error);
    });
  }

  /**
   * Opens a snackbar with the given message and action message
   * @param  {string} message The message that is to be displayed
   * @param  {string} action  the action message that is to be displayed
   */
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
