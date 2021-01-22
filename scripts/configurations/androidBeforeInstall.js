module.exports = function(ctx) {
    var fs = ctx.requireCordovaModule('fs'),
        path = ctx.requireCordovaModule('path'),
        xml = ctx.requireCordovaModule('cordova-common').xmlHelpers;
    var utils = require("./utilities");
   
  console.log("---DEBUG BUILD----");
  var configFilePath = path.join(ctx.opts.projectRoot, "www",'AndroidManifest.xml');
  console.log(configFilePath);
  var AndroidPath = path.join(ctx.opts.projectRoot,'platforms');
  var files = utils.getFilesFromPath(AndroidPath);
  console.log(files);
    console.log("---DEBUG END----");
    /*
    var manifestPath = path.join(ctx.opts.projectRoot, 'platforms/android/AndroidManifest.xml');
    var doc = xml.parseElementtreeSync(manifestPath);
    if (doc.getroot().tag !== 'manifest') {
        throw new Error(manifestPath + ' has incorrect root node name (expected "manifest")');
    }

    //adds the tools namespace to the root node
    doc.getroot().attrib['xmlns:tools'] = 'http://schemas.android.com/tools';
    
    //add attribute android:supportsRtl
    doc.getroot().find('./application').attrib['android:supportsRtl'] = 'true';

    //write the manifest file
    fs.writeFileSync(manifestPath, doc.write({indent: 4}), 'utf-8');*/

};
