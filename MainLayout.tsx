
import { Outlet } from 'react-router-dom';
import Header from './src/pages/Header';
import Footer from './src/pages/Footer';
export default function MainLayout() {
  return (
    <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
  )
}
