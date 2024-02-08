import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ResumeApp from './components/ResumeApp';
import Home from './pages/Home';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="resume" element={<ResumeApp />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;
