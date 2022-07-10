import emotionReset from 'emotion-reset';
import {Global, css} from '@emotion/react';
import {Routes, Route, Link} from 'react-router-dom';
import V1 from './pages/v1';
import V2 from './pages/V2';

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Routes>
        <Route path="v1" element={<V1 />} />
        <Route path="v2" element={<V2 />} />
      </Routes>
    </>
  );
}

export default App;

const globalStyle = css`
  ${emotionReset}
  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
`;
