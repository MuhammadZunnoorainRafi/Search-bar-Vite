import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen p-2 md:p-0">
      <Navbar />
      <div className="mt-2 mb-auto">
        <main className="max-w-5xl mx-auto ">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
