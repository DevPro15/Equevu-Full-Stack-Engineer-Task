import {Routes,Route, Navigate} from 'react-router-dom'
import Form from './components/pages/Form';
import LoginPage from './components/pages/LoginPage';
import ResumeGetter from './components/pages/ResumeGetter';
import Listing from './components/pages/List';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />}/>
      <Route path='form' element={<Form/>}/>
      <Route path='login' element={<LoginPage />}/>
      <Route path='resume' element={<ResumeGetter />}/>
      <Route path='list' element={<Listing/>}/>
      <Route
      path="*"
      element={<Navigate to="/" />}
    />
    </Routes>
    </>
  );
}

export default App;
