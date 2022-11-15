import {BrowserRouter} from 'react-router-dom';
import AuthProvider from './context/auth';

import Routes from './routes';
export default function App() {
  return (
    <AuthProvider> 
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </AuthProvider>
  );
}

