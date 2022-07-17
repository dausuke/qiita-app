import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeV1 from './v1/pages/Home';
import PostDetailV1 from './v1/pages/PostDetail';
import App from './App';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path="v1" element={<HomeV1 />} />
          <Route path="v1/post/:postId" element={<PostDetailV1 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
