import React,  { useState } from 'react'
//React hook (useState) let you use state and other React features without writing a class.
export default function Textarea(props) {
    //text: declare a new state variable using useState react hook
    const [text, setText] = useState('default state value is assignend to text state variable');

    const handleTextChanged = (event) =>{        
        setText(event.target.value);
    }
    const textToUppercase = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text UpperCase is done','success');
    }
    const textToLowercase = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text Lowercase is done','success');
    }
    const clearText = () =>{
        let newText = '';
        setText(newText);
        props.showAlert('All text Messages are cleared','success');
    }
    const reverseText = () =>{
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.showAlert('Text Message is reversed','success');
    }
    const titleCaseText = () =>{
        let arrText = text.split(" ");        
        let titleCaseText = "";
        arrText.forEach((word) => {
            titleCaseText += word.charAt(0).toUpperCase() + word.substr(1).toLowerCase() + " ";             
        });
        setText(titleCaseText);     
        props.showAlert('Text Title case conversion is done','success');  
    }
    //credits:A
    const handleCopyText = () =>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value); 
        props.showAlert('Text is copied to clipboard','success'); 
    }
    //credits: coding-wala
    const handleExtraSpace = () =>{
        let newtext = text.split(/[  ]+/); //using regex
        setText(newtext.join(" "));
        props.showAlert('Extra space has been removed','success'); 
    }

    const countWords = (text) => {
        let wc = text.split(" ").length;
        text.split(" ").forEach((word) => {
            if(!word.length){
                wc -= 1;  
            }
        });

        return wc;
    }

    return (
        <div>
            <div className={`container text-${props.textMode === 'dark' ? 'light': ''}`}>
            <h2 className="my-3">{props.heading}</h2>
            <div className="mb-3">        
                <textarea className="form-control" style={{ backgroundColor: props.textMode === 'dark' ? 'dimgrey' : '', color: props.textMode === 'dark' ? 'white': 'black' }} id="myBox" value={text} onChange={handleTextChanged} rows="7"></textarea>
            </div>
            <input type="button" className={`btn me-1 btn-${props.textMode === 'dark' ? 'light' : 'primary'}`} onClick={textToUppercase} value="TextUppercase"/>
            <input type="button" className={`btn me-1 btn-${props.textMode === 'dark' ? 'light' : 'primary'}`} onClick={textToLowercase} value="TextLowercase"/>
            <input type="button" className={`btn me-1 btn-${props.textMode === 'dark' ? 'light' : 'primary'}`} onClick={clearText} value="clearText"/>            
            <input type="button" className={`btn me-1 btn-${props.textMode === 'dark' ? 'light' : 'primary'}`} onClick={reverseText} value="reverseText"/>            
            <input type="button" className={`btn me-1 btn-${props.textMode === 'dark' ? 'light' : 'primary'}`} onClick={titleCaseText} value="TextTitleCase"/>            
            <input type="button" className={`btn me-1 btn-${props.textMode === 'dark' ? 'light' : 'primary'}`} onClick={handleCopyText} value="Copy Text"/>            
            <input type="button" className={`btn me-1 btn-${props.textMode === 'dark' ? 'light' : 'primary'}`} onClick={handleExtraSpace} value="Remove extra space"/>            
            <h3 className="mt-2">Text Summary:</h3>
            <p>{ countWords(text) }  words and {text.length} characters</p> 
            <p>{ 0.008 * text.split(" ").length} minutes read</p>
            <h3 className="mt-2">Preview:</h3>            
            <p>{text.length > 0 ? text : 'Enter something to the textbox above to preview it here.'}</p>
            </div>
        </div>
    )
}
