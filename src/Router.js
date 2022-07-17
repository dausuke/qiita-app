import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './v1/pages/Home';
import PostDetail from './v1/pages/PostDetail';
import App from './App';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path="/v1" element={<Home />} />
          <Route path="/v1/post/:postId" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
