import { React } from "react";
import  './MessageBlockStyle.css';

const MessageBlock = (props) => {

    const isSender = props.userId === 1; // Replace 1 with the current user's ID

    const messageBoxClass = isSender ? 'messageBoxRight' : 'messageBoxLeft';

    return (
        <div className={messageBoxClass}>
            <p>{props.message}</p>
        </div>
    );
};

export default MessageBlock;
