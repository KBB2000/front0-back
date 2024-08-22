import React from 'react';
import {Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from "./pages/BookingPage";
import PaymentConfirmationPage from './pages/PaymentConfirmationPage';
import NavBar from './components/NavBar';
import BookedSessionPage from './components/BookedSessionPage';



function App() {



    return (
        <>
            <NavBar />
        <Routes>
                <Route path="/" element={<HomePage />} exact />
                <Route path="/book" element={<BookingPage/>} />
                <Route path="/payment-confirmation" element={<PaymentConfirmationPage />} />
                <Route path="/booked-session" element={<BookedSessionPage />} />
        </Routes>
        </>
    );
}

export default App;
