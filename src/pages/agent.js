import React, { useState } from "react";
import { ReactComponent as MailBox } from '../assets/inbox-alt-1-svgrepo-com.svg'
import { ReactComponent as Connection } from "../assets/share-circle-network-connection-social-svgrepo-com.svg";
import { ReactComponent as Friend } from "../assets/user-friends-svgrepo-com.svg";
import { ReactComponent as Graph } from "../assets/graph-increase-svgrepo-com.svg";
import img from "../assets/young-bearded-man-with-striped-shirt.jpg"
import img1 from "../assets/align-left_10654774.png"
import { ReactComponent as RefreshIcon } from "../assets/refresh-svgrepo-com.svg";
import { ReactComponent as CallIcon } from "../assets/call-alt-svgrepo-com.svg";
import { ReactComponent as ProfileIcon } from "../assets/user-profile-avatar-svgrepo-com.svg";
import AllMessages from "./AllMessages";
import { DATA } from "../data";
import { CHATS } from "../chats";
import Chats from "./chats";

const Agent = () => {
    const [message, setMessage] = useState(DATA)
    const [chats, setChats] = useState(CHATS)
    const [activeMessageIndex, setActiveMessageIndex] = useState(null);
    const handleSetActiveMessage = (index) => {
        setActiveMessageIndex(index); // Set the active message index
        // console.log(index)
    };
    const [messages, setMessages] = useState([]);
    // State to store the current message being typed
    const [inputMessage, setInputMessage] = useState('');
    const name = 'John Doe';
    const status = 'Online';
    const email = 'john@gmail.com';
    const fName = 'John';
    const lName = 'Doe';
    // Function to handle sending a message
    const sendMessage = () => {
        if (inputMessage.trim() !== '') {
            // Create a new message object with the input message content
            const newMessage = {
                content: inputMessage,
                sender: 'user', // Assuming the user is sending the message
                timestamp: new Date().toISOString(), // Add a timestamp to the message
            };
            // Update the messages state with the new message
            setMessages([...messages, newMessage]);
            // Clear the input message
            setInputMessage('');
        }
    };

    const [navActiveTab, setNavActiveTab] = useState('mailbox'); // Initial active tab

    const handleNavTabClick = (tab) => {
        setNavActiveTab(tab); // Set the active tab when clicked
    };


    return (
        <div className="container">
            <div className="nav-container">
                <ul className="nav-tabs">
                    <li className={navActiveTab === 'connection' ? 'active-nav' : ''} onClick={() => handleNavTabClick('connection')}>
                        <a href="#"><Connection /></a>
                    </li>
                    <li className={navActiveTab === 'mailbox' ? 'active-nav' : ''} onClick={() => handleNavTabClick('mailbox')}>
                        <a href="#"><MailBox /></a>
                    </li>
                    <li className={navActiveTab === 'friend' ? 'active-nav' : ''} onClick={() => handleNavTabClick('friend')}>
                        <a href="#"><Friend /></a>
                    </li>
                    <li className={navActiveTab === 'graph' ? 'active-nav' : ''} onClick={() => handleNavTabClick('graph')}>
                        <a href="#"><Graph /></a>
                    </li>
                </ul>
                <div className="profile-container">
                    <div className="profile-image">
                        <img src={img} alt="Profile" />
                        <div className="status-dot"></div>
                    </div>
                </div>
            </div>
            <div className="secondComponent">
                <div class="header">
                    <div className="left_content">
                        <img src={img1} alt="Menu" className="menu-icon" />
                        <span className="conversation">Conversation</span>
                    </div>
                    <RefreshIcon className="refresh-icon" />
                </div>
                <div className="divider"></div>
                {message.map((data, index) => (<div onClick={() => handleSetActiveMessage(index)}><AllMessages name={data.name} type={data.type} time={data.time} heading={data.heading} text={data.text} isActive={index === activeMessageIndex} /> </div>))}
            </div>
            <div className="thirdComponent">
                <div className="header">
                    <span className="chat-heading">Chat</span>
                </div>
                <div className="divider"></div>
                <div className="chats">
                    {chats.map(data => (<Chats name={data.name} time={data.time} text={data.text} img={data.avatar} myChat={data.myChat} />))}
                </div>
                <input type="text" name="" id="input-area" placeholder="Message" />
            </div>
            <div className="fourthComponent">
                <div class="profile-container1">
                    <img src={img} alt="Avatar" className="profile-avatar" />
                    <div className="profile-name"><b>{name}</b></div>
                    {status === "Online" ? (<div className="full-profile-status">
                        <div className="profile-status-dot-online"></div>
                        <div className="profile-status">Online</div>
                    </div>) :
                        (<div className="full-profile-status">
                            <div className="profile-status-dot-offline"></div>
                            <div className="profile-status">Offline</div>
                        </div>)}
                    <div className="profile-buttons">
                        <button class="call-button"><CallIcon/>Call</button>
                        <button class="profile-button"><ProfileIcon/>Profile</button>
                    </div>
                </div>
                <div className="divider profile-divider"></div>
                <div className="profile-details">
                    <div className="details-box">
                        <div className="details">
                            <h4 className="details-header">Consumer Details</h4>
                            <div className="detail">
                                <div className="detail-heading">
                                    Email
                                </div>
                                <div className="detail-value">{email}</div>
                            </div>
                            <div className="detail">
                                <div className="detail-heading">
                                    First Name
                                </div>
                                <div className="detail-value">{fName}</div>
                            </div>
                            <div className="detail">
                                <div className="detail-heading">
                                    Last Name
                                </div>
                                <div className="detail-value">{lName}</div>
                            </div>
                            <a className="more-details" href="#">View more details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agent;