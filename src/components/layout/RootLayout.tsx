import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SocialFloatingActions from './SocialFloatingActions';

const RootLayout = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    const isInfrastructure = location.pathname.startsWith("/infrastructure");
    const isAcademics = location.pathname.startsWith("/academics") || location.pathname.startsWith("/about");

    let bgColor = "bg-white";
    if (isAcademics) bgColor = "bg-gray-50";

    return (
        <div className={`min-h-screen flex flex-col transition-colors duration-500 ${bgColor} relative isolate`}>
            {/* Global Page Background Texture */}
            <div className="fixed inset-0 -z-10  mix-blend-multiply pointer-events-none">
                <img
                    src="/background/home-page-1.jpeg"
                    alt="Institutional Background"
                    className="w-full h-full object-cover grayscale"
                />
            </div>

            <Navbar />
            <main className={`flex-grow ${(!isHome && !isInfrastructure) ? 'pt-28' : ''}`}>
                <Outlet />
            </main>
            <Footer />
            <SocialFloatingActions />
        </div>
    );
};


export default RootLayout;
