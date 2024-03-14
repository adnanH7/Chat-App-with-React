import { ChatEngine } from 'react-chat-engine';
//import ChatFeed from './components/ChatFeed';
//import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="589d6456-a8c8-4835-ab58-d5a492da976d"
            userName="adnan"
            userSecret="123"
          //  renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        />
    )
}
export default App;