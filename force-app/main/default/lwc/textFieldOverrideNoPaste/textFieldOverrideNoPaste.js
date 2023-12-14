import omniscriptEmail from "omnistudio/omniscriptEmail";
import template from './textFieldOverrideNoPaste.html';

export default class TextFieldOverrideNoPaste extends omniscriptEmail {
   
     
         // Events
    handleBlur(event) {
        this.omniApplyCallResp({[this.jsonDef.name]: event.target.value});
    }

        handlePaste(event){
            console.log("pasted");
            event.preventDefault(); // Prevent the default paste behavior
        }

        handleCopy(event) {
        console.log("Copying is not allowed");
        event.preventDefault(); // Prevent the default copy behavior
    }

        handleDrop(){
            return false
        }
   
        render() {
            return template;
        }
    }