import { useState } from "react"
import React from 'react'

export const TextArea = (props) => {
    const [text, settext] = useState("");
    const onChangehandler=(event)=>{
        settext(event.target.value);
        console.log(text);
    }

    const onUpClick=()=>{
        if(text.length>0)
        settext(text.toUpperCase());
        if(text.length>0)
        props.getAlert("Converted into UpperCase","success");
        else
        props.getAlert("Enter some text!!!","warning");
    }

    const onlowClick=()=>{
        settext(text.toLowerCase());
        if(text.length>0)
        props.getAlert("Converted into LowerCase","success");
        else
        props.getAlert("Enter some text!!!","warning");
    }

    const onClearClick=()=>{
        settext("");
    }

    const onCopyClick=()=>{
        var txt=document.getElementById('myid');
        txt.select();
        //txt.setSelectionRange(0,99999);
        navigator.clipboard.writeText(txt.value);
        if(text.length>0)
        props.getAlert("Copied on Clipboard","success");
        else
        props.getAlert("Enter some text!!!","warning");
    }

    const onRemoveExtra=()=>{
        var txt=text.split(/[ ]+/);
        settext(txt.join(" "));
        if(text.length>0)
        props.getAlert("Removed extra spaces","success");
        else
        props.getAlert("Enter some text!!!","warning");
    }

    return (
        <>
            <div className="mb-3 my-3 container" style={{ color: props.mode==='dark'?'white':'black'}}>
                <h2>{props.heading}</h2>
                <textarea 
                    className="form-control" 
                    id="myid" 
                    rows="8"
                    value={text}
                    onChange={onChangehandler}
                    style={{
                        backgroundColor: props.mode==='dark'?'#2A2B2D':'#D7F5F7 ',
                        color: props.mode==='dark'?'white':'black'
                    }}
                ></textarea>
                <button type="button " 
                    className="btn btn-primary my-2"
                    onClick={onUpClick}
                >Upper Case</button>

                <button type="button " 
                    className="btn btn-primary my-2 mx-2"
                    onClick={onlowClick}
                >Lower Case</button>

                <button type="button " 
                    className="btn btn-primary my-2 mx-2"
                    onClick={onRemoveExtra}
                >Remove Extra space</button>

                <button type="button " 
                    className="btn btn-primary my-2 mx-2"
                    onClick={onCopyClick}
                >Copy Text</button>

                <button type="button " 
                    className="btn btn-primary my-2 mx-2"
                    onClick={onClearClick}
                >Clear</button>
                
                <h3 className=" my-3">Preview of your Text</h3>
                <p>Number of charectors: {text.length}</p>
                <p>Number of words : {text.split(' ').filter((ele)=>{return ele.length>0}).length}</p>
                <p>Minutes to Read : {(text.split(' ').filter((ele)=>{return ele.length>0}).length)*0.008} Min</p>
                <h4 className=" my-3">Your Text</h4>
                <p>{text.length>0?text:'Write your text in above textbox to preview it here.'}</p>
            </div>
            
        </>
    )
}
