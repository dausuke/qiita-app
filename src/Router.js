import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Base from './v1/components/layouts/Base';
import HomeV1 from './v1/pages/Home';
import PostDetailV1 from './v1/pages/PostDetail';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<HomeV1 />} />
          <Route path="post/:postId" element={<PostDetailV1 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
