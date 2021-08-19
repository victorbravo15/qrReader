import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { ToastController } from '@ionic/angular';
import { NgxQrcodeElementTypes } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  qrData = 'https://apps.stulztecnivel.com/STAllInOne/';
  scannedCode = null;
  elementType: NgxQrcodeElementTypes.URL | NgxQrcodeElementTypes.CANVAS | NgxQrcodeElementTypes.IMG = NgxQrcodeElementTypes.CANVAS;
 
  constructor(
    private barcodeScanner: BarcodeScanner,
    private base64ToGallery: Base64ToGallery,
    private toastCtrl: ToastController
    ) {}

    scanCode(){
      this.barcodeScanner.scan().then(
        barcodeData => {
          this.scannedCode = barcodeData;
        }
      );
    }

    downloadQR(){
      const canvas = document.querySelector('canvas') as HTMLCanvasElement;
      const imageData = canvas.toDataURL('image/jpeg').toString();

      let data = imageData.split(',')[1];

      this.base64ToGallery.base64ToGallery(data,
        {prefix: 'img', mediaScanner: true})
        .then(async res => {
          let toast = await this.toastCtrl.create({
            header: 'QR Code saved in your device'
          })

        }, err => console.log('err: ', err)
        );
    }

}
