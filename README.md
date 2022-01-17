How to fix and successfully install this plugin: sfdx plugins:install @salesforce/lwc-dev-server

Steps & Commands:

Step 1: 
Install npm: [https://nodejs.org/en/download/]

Step 2: 
Ensure there are no existing yarn.lock files or folders, navigate to the directory [C:\Users\YOURUSER\AppData\Local\sfdx] , There probably are NOT any yarn.lock files or folders, but after many failed installation attempts, this could be an issue, so it is best to check for this, and delete any you discover, before continuing with the installation.

Step 3: 
Run the command: [npm install --global windows-build-tools] This will install Python 2.7 and build tools. I find that this tends to fail a lot, the python always installs fine, but build tools does not, sometimes it seems frozen on that step. If this happens CTRL + C out of the command, and open up the visual studio installer (search for it in the start menu), you should be able to click "repair" on the "Visual Studio Build Tools 2017" module. This will successfully install the required files in the correct directory.

Step 4: 
By default, the npm command installs python in the .windows-build-tools folder in your user's directory, [C:\Users\YOURUSER\.windows-build-tools], move all python files from here to root of your C drive. This will ensure the node-gyp can find python easily.

Step 5: 
Ensure successful installation of build tools, to do this go to [C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools], there should be 7 folders in here, if it is empty, build tools did not successfully install, please see solution in step 3.

Step 6: 
Run this command: [npm install -g node-gyp]

Step 7: 
Run this command: [sfdx plugins:install @salesforce/lwc-dev-server]



# Salesforce DX Project: Next Steps

Now that you’ve created a Salesforce DX project, what’s next? Here are some documentation resources to get you started.

## How Do You Plan to Deploy Your Changes?

Do you want to deploy a set of changes, or create a self-contained application? Choose a [development model](https://developer.salesforce.com/tools/vscode/en/user-guide/development-models).

## Configure Your Salesforce DX Project

The `sfdx-project.json` file contains useful configuration information for your project. See [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.

## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)
