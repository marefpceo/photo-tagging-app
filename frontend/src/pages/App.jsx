import Header from '../sections/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <section className='flex flex-1 flex-col items-center justify-center'>
        <Outlet />
      </section>
    </>
  );
}

export default App;
