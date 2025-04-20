import Board from './pages/Boards/id.jsx'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/404/NotFound.jsx'
import Auth from './pages/Auth/Auth.jsx'
import AccountVerification from './pages/Auth/AccountVerification.jsx'


function App() {
  return (
    <>
      <Routes>
        <Route path="/boards/:boardId" element={<Board/>} />


        {/* Authentication */}
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth />} />
        <Route path='/account/verification' element={<AccountVerification />} />
        <Route path="*" element={<NotFound />} />


      </Routes>
    </>
  )
}


export default App
