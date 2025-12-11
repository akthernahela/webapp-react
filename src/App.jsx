import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import MovieDetail from '../components/MovieDetail';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
