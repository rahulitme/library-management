import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-container">
            <h1>About Our College</h1>
            <p>
                Our college is dedicated to fostering an environment of excellence and innovation. 
                We strive to provide the best educational experience through hands-on learning, 
                state-of-the-art facilities, and an inclusive community.
            </p>

            <h2>Mission & Vision</h2>
            <p>
                Our mission is to empower students with knowledge and skills that shape their future. 
                We envision becoming a globally recognized institution for academic excellence and research.
            </p>

            <h3>Why Choose Us</h3>
            <ul>
                <li>World-class faculty and innovative curriculum.</li>
                <li>State-of-the-art labs and research facilities.</li>
                <li>Vibrant campus life with cultural and technical fests.</li>
                <li>Extensive placement opportunities and industry partnerships.</li>
            </ul>

            <h3>Campus Life</h3>
            <div className="image-container">
                <img src="path/to/campus.jpg" alt="Campus" />
            </div>

            <h3>Our Achievements</h3>
            <div className="achievements">100+ Successful Alumni</div>

            <footer>
                © 2024 Your College Name. All Rights Reserved.
            </footer>
        </div>
    );
};

export default AboutPage;
