import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import MovieDetail from '../components/MovieDetail';
import AppLayout from '../public/AppLayout'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />} >
            <Route index element={<HomePage />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
