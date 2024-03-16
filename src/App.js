import 'manju-ui-lib/dist/style.css';
import Home from './Home';
import AboutUs from './AboutUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/aboutus" Component={AboutUs} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
