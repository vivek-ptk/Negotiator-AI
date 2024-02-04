import { Route, Routes } from 'react-router-dom';
import Chat from "./chat/chat";
import Homepage from "./homepage/homepage";
import Profile from './profile/profile';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
