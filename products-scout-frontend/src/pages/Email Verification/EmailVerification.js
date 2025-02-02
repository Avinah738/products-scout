import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './EmailVerificationStyles.css'; // Import the CSS file with scoped styles
import logo from './company-logo.png'; // Replace with your actual logo path

const EmailVerification = () => {
    const { code } = useParams(); // Retrieve the code from the URL
    const [status, setStatus] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await fetch(`/api/verify-email/${code}`); // Adjust API path as needed
                const data = await response.json();

                if (response.ok) {
                    setStatus('success');
                    setMessage(data.message || 'Your email has been successfully verified!');
                } else {
                    setStatus('fail');
                    setMessage(data.error || 'Invalid or expired verification link.');
                }
            } catch (error) {
                setStatus('fail');
                setMessage('An error occurred while verifying the email.');
            }
        };

        verifyEmail();
    }, [code]);

    return (
        <div className="email-verification-container">
            <div className="email-logo-container">
                <img src={logo} alt="Company Logo" className="email-company-logo" />
            </div>
            <div className={`email-message-container email-${status}`}>
                {status === 'success' && (
                    <>
                        <h1 className="email-success-message">🎉 {message}</h1>
                        <p className="email-tagline">"Every great journey starts with a small step. Welcome to your next adventure!"</p>
                        <p className="email-instructions">We are thrilled to have you onboard. Explore, discover, and make the most out of our services today!</p>
                        <button className="email-cta-button" onClick={() => window.location.href = '/signin'}>Start Your Journey</button>
                    </>
                )}
                {status === 'fail' && (
                    <>
                        <h1 className="email-error-message">⚠️ {message}</h1>
                        <p className="email-tagline">"Oops! Something went wrong, but every setback is a setup for a comeback."</p>
                        <p className="email-instructions">Please check your link or contact our support team for assistance. We're here to help!</p>
                        <button className="email-cta-button" onClick={() => window.location.href = '/help'}>Get Help</button>
                    </>
                )}
                {status === null && (
                    <>
                        <h1 className="email-loading-message">🔄 Verifying your email, please wait...</h1>
                        <p className="email-tagline">"We are preparing something amazing for you. Just a moment!"</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default EmailVerification;
