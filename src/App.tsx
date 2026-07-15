import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import RootLayout from './components/layout/RootLayout';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import AboutHome from './pages/about-us/AboutHome';
import AboutLayout from './pages/about-us/AboutLayout';
import History from './pages/about-us/History';
import Founders from './pages/about-us/Founders';
import VisionMission from './pages/about-us/VisionMission';
import ChairmanMessage from './pages/about-us/ChairmanMessage';
import PrincipalMessage from './pages/about-us/PrincipalMessage';
import DirectorOfStudies from './pages/about-us/DirectorOfStudies';
import Contact from './pages/Contact';
import Admissions from './pages/Admissions';
import Faculty from './pages/Faculty';
import Infrastructure from './pages/Infrastructure';
import Downloads from './pages/Downloads';
import AcademicsLayout from './pages/academics/AcademicsLayout';
import AcademicsHome from './pages/academics/AcademicsHome';
import Puc from './pages/academics/Puc';
import Bca from './pages/academics/Bca';
import Bcom from './pages/academics/Bcom';
import BcomDataAnalytics from './pages/academics/BcomDataAnalytics';

import StudentLifeLayout from './pages/student-life/StudentLifeLayout';
import Welfare from './pages/student-life/Welfare';
import AntiRagging from './pages/student-life/AntiRagging';
import Placement from './pages/student-life/Placement';
import NonAcademics from './pages/non-academics/NonAcademicsHome';
import NonAcademicsLayout from './pages/non-academics/NonAcademicsLayout';
import Sports from './pages/non-academics/Sports';
// import Throwball from './pages/non-academics/Throwball';
import Cultural from './pages/non-academics/Cultural';
import Spiritial from './pages/non-academics/Spiritual';
import Nss from './pages/non-academics/Nss';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<AboutLayout />}>
                        <Route index element={<AboutHome />} />
                        <Route path="history" element={<History />} />
                        <Route path="founders" element={<Founders />} />
                        <Route path="vision-mission" element={<VisionMission />} />
                        <Route path="chairman-message" element={<ChairmanMessage />} />
                        <Route path="principal-message" element={<PrincipalMessage />} />
                        <Route path="director-of-studies" element={<DirectorOfStudies />} />
                    </Route>
                    <Route path="academics" element={<AcademicsLayout />}>
                        <Route index element={<AcademicsHome />} />
                        <Route path="puc" element={<Puc />} />
                        <Route path="bca" element={<Bca />} />
                        <Route path="bcom" element={<Bcom />} />
                        <Route path="bcom-data-analytics" element={<BcomDataAnalytics />} />
                    </Route>
                    <Route path="admissions" element={<Admissions />} />

                    <Route path="infrastructure" element={<Infrastructure />} />
                    <Route path="student-life" element={<StudentLifeLayout />}>
                        <Route index element={<Welfare />} />
                        <Route path="anti-ragging" element={<AntiRagging />} />
                        <Route path="placement" element={<Placement />} />
                    </Route>
                    <Route path="non-academics" element={<NonAcademicsLayout />}>
                        <Route index element={<NonAcademics />} />
                        <Route path="sports" element={<Sports />} />
                        <Route path="cultural" element={<Cultural />} />
                        <Route path="spiritual" element={<Spiritial />} />
                        <Route path="nss" element={<Nss />} />
                    </Route>
                    <Route path="faculty" element={<Faculty />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="downloads" element={<Downloads />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <AnimatedRoutes />
        </Router>
    );
}

export default App;
