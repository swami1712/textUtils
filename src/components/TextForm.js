import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUppercase = () => {
        var newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Success", "Converted to uppercase");
    }
    const handleLowercase = () => {
        var newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Success", "Converted to lowercase");
    }
    const handleOnchange = (event) => {
        setText(event.target.value);

    }
    const handleCleartext = () => {
        setText("");
        props.showAlert("Success", "Cleared text");
    }
    const handleCopytext = () => {
        var newText = document.getElementById("myBox");
        newText.select();
        newText.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Success", "Copied to clipboard");
    }
    return (
        <>
            <div className="container" style={{ backgroundColor: props.mode, color: props.mode === "dark" ? "white" : "black" }}>
                <h2 className="my-3">{props.formTitle}</h2>

                <form>
                    <div className="mb-3"   >
                        <textarea className="form-control" id="myBox" style={{ backgroundColor: props.mode === "dark" ? "#092958" : "white", color: props.mode === "dark" ? "white" : "black" }} value={text} onChange={handleOnchange} rows="3"></textarea>
                    </div>
                </form>
                <button className="btn btn-primary" onClick={handleUppercase}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowercase}>Convert to lowecase</button>
                <button className="btn btn-primary mx-2" onClick={handleCleartext}>Clear text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopytext}>Copy text</button>

                <h2 className="my-2">Text description</h2>
                <p>Above text contains {text.split(" ").length === 1 ? text.split("").length : text.split(" ").length} words and {text.length} characters.</p>
                <h2>Text preview</h2>
                <p>{text.length > 0 ? text : "Enter some text in above text-box to preview it over here..."}</p>
            </div>


        </>
    )
}
