import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './v1/pages/Home';
import PostDetail from './v1/pages/PostDetail';
import App from './App';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
