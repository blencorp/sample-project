import { Routes, Route } from 'react-router-dom';
import Home from './pages/Listing';
import Details from './pages/Details';
import Navbar from './components/Navbar';

const App = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;