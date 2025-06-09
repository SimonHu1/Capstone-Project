import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Bookingpage from './pages/Bookingpage';

export default function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/booking" element={<Bookingpage />} />
            </Routes>
        </main>
    );
}
