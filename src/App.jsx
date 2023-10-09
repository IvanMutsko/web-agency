import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Triangle } from 'react-loader-spinner';

const Layout = lazy(() => import('./components/Layout/Layout'));

const loaderWrapStyle = {
  backgroundColor: '#242424',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

function App() {
  return (
    <Suspense
      fallback={
        <Triangle
          height="150"
          width="150"
          color="#03e9f4"
          ariaLabel="triangle-loading"
          wrapperStyle={loaderWrapStyle}
          visible={true}
        />
      }
    >
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </Suspense>
  );
}

export default App;
