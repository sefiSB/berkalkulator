import React from "react";


const DatePopUp = ({active, onDateChange,show}) => {
    if (show){
        return (
            <div className="container" style={{display:"absolute"}}>
                <div className="row">
                    <div className="col">
                        <label htmlFor="date">Dátum:</label>
                        <input type="date" id="date" name="date" onChange={onDateChange} value={active.date}/>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return null;
    }
}

export default DatePopUp;