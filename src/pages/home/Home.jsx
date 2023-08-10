import { React } from "react";
import MessageBlock from '../../components/chat/MessageBlock';
import './HomeStyle.css';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {

    const demoChat = [{
        message: "Hello computer.",
        userId: 1
    }, {
        message: "Hello user.",
        userId: 2
    }, {
        message: "What is 2+2 is equals to.oomskslsjknf rfoefijho wifowuehfpwiuhfpafaouh wisufhiufhiwuhfowufj woefjoweifjw oweifjwoeifjwoefi owiejfoweifjeowif woefjoweifjw oweifjwoeifjwoefi owiejfoweifjeowifwoefjoweifjw oweifjwoeifjwoefi owiejfoweifjeowifvvvvvvvvvvwoefjoweifjw oweifjwoeifjwoefi owiejfoweifjeowifwoefjoweifjw oweifjwoeifjwoefi owiejfoweifjeowifvvvvwoefjoweifjw oweifjwoeifjwoefi owiejfoweifjeowifvwoefjoweifjw oweifjwoeifjwoefi owiejfoweifjeowifwoefjoweifjw oweifjwoeifjwoefi owiejfoweifjeowifv",
        userId: 1
    }, {
        message: "It is equals 4. woefjoweifjw oweifjwoeifjwoefi owiejfoweifjeowifwoefjoweifjw oweifjwoeifjwoefi woefjoweifjw oweifjwoeifjwoefi owiejfoweifjeowifwoefjoweifjw oweifjwoeifjwoefi owiejfoweifjeowif owiejfoweifjeowif woefjoweifjw oweifjwoeifjwoefi owiejfoweifjeowiwoefjoweifjw oweifjwoeifjwoefi owiejfoweifjeowiff",
        userId: 2
    }]

    return (
        <main>
            <div className="container">
                <div className="chatContainer">
                    {
                        demoChat.map((el, index) => (
                            <MessageBlock message={el.message} userId={el.userId} key={uuidv4()} />
                        ))
                    }
                </div>
                <div className="inputBoxContainer">
                   <textarea className="inputBox" placeholder="Please ask a question..."></textarea>
                   <button className="sendButton">Send</button>
                </div>
            </div>
        </main>
    )
}

export default Home;