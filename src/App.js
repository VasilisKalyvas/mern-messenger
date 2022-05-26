import {Route , Routes as Switch} from 'react-router-dom'
import './App.css';
import  Home  from './Pages/Home';
import  Chat  from './Pages/Chat';
import ChatProvider from './Context/ChatProvider';

function App() {
  return (
    <div className="App">
       <ChatProvider>
        <Switch>
          <Route path='/' element={<Home/>}/>
          <Route path='/chats'  element={<Chat/>}/>
        </Switch>
      </ChatProvider>
    </div>
  );
}

export default App;
