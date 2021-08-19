# Start app

npm i @techiediaries/ngx-qrcode

# Install the Scanner plugin 

npm install phonegap-plugin-barcodescanner
npm install @ionic-native/barcode-scanner
ionic cap sync

# Install for saving a QR code

npm install cordova-base64-to-gallery 
npm install @ionic-native/base64-to-gallery
ionic cap sync

# Install Camera

ionic g service services/photo
npm i @capacitor/camera 
npm i @capacitor/filesystem
npm i @capacitor/storage



