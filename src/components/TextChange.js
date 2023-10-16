import React, { useState } from 'react';

export default function TextChange(props) {

    const [text,setText]=useState('');
    


    function textLow(){
        let newText=text.toLowerCase();
        setText(newText);
        if(newText){
            props.setAlert("Text converted to lower Case","Success")
        }
        
    }

    function textUp(){
        let newText=text.toUpperCase();
        setText(newText);
        if(newText){
            props.setAlert("Text converted to upper Case","Success")
        }
        
    }

    function spaceUp(){
        let newText='';
       let array1= text.split(" ").filter((value)=>{
            return value != "";
        })
        for(let i=0;i<array1.length;i=i+1){
            newText=newText+" "+array1[i]
        }
        setText(newText);
        if(newText){
            props.setAlert('Text converted to equal spaces',"Success");
        }
    }

    const onChnage=(event)=>{
        setText(event.target.value);
    }

   let Mystyles={
    color:props.mode==="Turn Dark Mode" ? 'black' :'white',
    backgroundColor:props.mode==="Turn Dark Mode" ? 'white' : 'lightgrey'
   }
    
    return (
        <>
        <div className="mb-3"  >
                <h1 >Enter Your Text Here</h1>
            <textarea   style={Mystyles}  className="form-control" id="exampleFormControlTextarea1" rows="3"  onChange={onChnage} value={text} placeholder="enter here"></textarea>
            <button disabled={text.length===0} onClick={textLow} className="btn btn-primary mx-5 my-2"> Change Text to Lower Case</button>
            <button  disabled={text.length===0} onClick={textUp} className="btn btn-primary mx-5 my-2"> Change Text to Upper Case</button>
            <button disabled={text.length===0} onClick={spaceUp} className="btn btn-primary mx-5 my-2"> Change Text to equal spaces</button>
            

        </div>

        <div className="container my-6" >
            <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((value)=>{
            return value !=="";
        }).length} words </p>
        <p>{text.split("").filter((value)=>{
            return value !==" ";
        }).length} characters</p>
        <p> {0.008*text.split(" ").filter((value)=>{
            return value !=="";
        }).length} Minutes Read</p>
        <p>
            <h2>Preview</h2>
            {text.length>0 ? text : "No Preview Avaliable"}
        </p>
        
        
        </div>
        </>
    )
}