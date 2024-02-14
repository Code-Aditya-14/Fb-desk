import React from "react";

const AllMessages = ({ name, type, time, heading, text, isActive }) => {
    const trimmedHeading = heading.length > 25? heading.slice(0, 25)+"...": heading;
    const trimmedText = text.length > 40? text.slice(0, 40)+"...": text;
    return (
        <div className={`content ${isActive ? 'active' : ''}`}>
            <div class="checkbox-wrapper">
                <div className="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="label">
                        <b><div className="name">{name}</div></b>
                        <b><div className="type">{type}</div></b>
                    </div>
                </div>
                <div className="time">{time}</div>
            </div>
            <div className="heading"><b>{trimmedHeading}</b></div>
            <div className="text">{trimmedText}</div>
        </div>
    );
}

export default AllMessages;