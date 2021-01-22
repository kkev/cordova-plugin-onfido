module.exports = function(ctx) {
    var fs = ctx.requireCordovaModule('fs'),
        path = ctx.requireCordovaModule('path'),
        xml = ctx.requireCordovaModule('cordova-common').xmlHelpers;
    var utils = require("./utilities");
   
  var cordovaAbove8 = utils.isCordovaAbove(context, 8);
  var cordovaAbove7 = utils.isCordovaAbove(context, 7);
  var defer;
  if (cordovaAbove8) {
    defer = require("q").defer();
  } else {
    defer = context.requireCordovaModule("q").defer();
  }
  
  var platform = context.opts.plugin.platform;
  var platformConfig = utils.getPlatformConfigs(platform);
  if (!platformConfig) {
    utils.handleError("Invalid platform", defer);
  }
  console.log("---DEBUG BUILD----");
  var wwwPath = utils.getResourcesFolderPath(context, platform, platformConfig);
  console.log(wwwPath);
  var sourceFolderPath = utils.getSourceFolderPath(context, wwwPath);
  var configFilePath = path.join(context.opts.projectRoot, "www",'AndroidManifest.xml');
  console.log(configFilePath);
    
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
