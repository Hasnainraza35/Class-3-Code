import React from "react";

function BAButton(props:{ 
    btnValue: string;
    btnClick?: () => void;
    style?: any;
}){ 
  console.log(props);

    const {style, btnClick ,btnValue} = props;
    return (
        <button 
        onClick={btnClick}
        style={{color: "blue" }}
        className="btn btn-danger roumded-0 m-2">{props.btnValue}</button>
    )
}
export default BAButton; 