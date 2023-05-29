import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private actionSheetCtrl: ActionSheetController,
              private alertController: AlertController) {} 

  async presentActionSheet() {
    const actionSheet =  await this.actionSheetCtrl.create({
      header: 'Actions', buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });
    
    await actionSheet.present()
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'You are Gay',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
