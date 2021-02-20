module.exports = function(ctx) {
    var fs = require('fs'),
        path = require('path'),
        xml = require('cordova-common').xmlHelpers;
    var utils = require("./utilities");
   
  console.log("---DEBUG BUILD----");
  var AndroidPath = path.join(ctx.opts.projectRoot,'platforms','android');
  AndroidPath = path.join(AndroidPath,'app','src');
  AndroidPath = path.join(AndroidPath,'main'); 
  var files = utils.getFilesFromPath(AndroidPath);
  console.log(files);
    console.log("---DEBUG END----");
    
    var manifestPath = path.join(AndroidPath, 'AndroidManifest.xml');
    var doc = xml.parseElementtreeSync(manifestPath);
    if (doc.getroot().tag !== 'manifest') {
        throw new Error(manifestPath + ' has incorrect root node name (expected "manifest")');
    }

    //adds the tools namespace to the root node
    doc.getroot().attrib['xmlns:tools'] = 'http://schemas.android.com/tools';
    
    //add attribute tools:replace="android:supportsRtl"
    doc.getroot().find('./application').attrib['tools:replace'] = 'android:supportsRtl';

    //write the manifest file
    fs.writeFileSync(manifestPath, doc.write({indent: 4}), 'utf-8');

};
