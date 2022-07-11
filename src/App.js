import emotionReset from 'emotion-reset';
import {Global, css} from '@emotion/react';
import {Routes, Route} from 'react-router-dom';
import V1 from './pages/V1';

function App() {
  return (
    <>
      <div css={container}>
        <Global styles={globalStyle} />
        <Routes>
          <Route path="/" element={<V1 />} />
        </Routes>
      </div>
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

const container = css`
  max-width: 1200px;
  margin: 0 auto;
`;
