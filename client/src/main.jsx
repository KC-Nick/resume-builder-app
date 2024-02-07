import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<h1 className='display-2'>Wrong page!</h1>} />
    </Routes>
  );
}

ReactDOM.render(
  <Router>
    <MainRoutes />
  </Router>,
  document.getElementById('root')
);

// import Home from '../src/pages/Home';
// import Login from '../src/pages/Login';
// import ResumeApp from '../src/components/ResumeApp';
// import LandingPage from '../src/components/Landing';
// import Signup from '../src/pages/Signup';

// function MainRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route index element={<LandingPage />} />
//         <Route path="login" element={<Login />} />
//         <Route path="signup" element={<Signup />} />
//         <Route path="resume" element={<ResumeApp />} />
//         <Route path="home" element={<Home />} />
//       </Route>
//       <Route path="*" element={<h1 className='display-2'>Wrong page!</h1>} />
//     </Routes>
//   );
// }