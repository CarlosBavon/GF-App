import '../components/qualifications.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Qualifications() {
  return (
    <div className="qualifications">
        <h1 className="qualifications-title">Qualifications</h1>
        <p className="qualifications-description">Essential Qualifications</p>
        <div className="qualification-list"> 
            <div className="basic">
                <h3>Basic Requirements</h3>
                <ul>
                    <li>✅ Must enjoy my terrible jokes (or at least fake-laugh).</li>
                    <li>✅ Willing to share fries but understands the last one is always mine.</li>
                    <li>✅ Accepts that "I’ll be ready in 5 minutes" is a myth.</li>
                    <li>✅ Can tolerate my questionable music/movie tastes.</li>
                </ul>
            </div>

            <div className="emotional">
                <h3>Emotional Skills</h3>
                <ul>
                    <li>❤️ Willing to be in a relationship with a person who is not perfect.</li>
                    <li>❤️ Willing to be in a relationship with a person who is not perfect.</li>
                    <li>❤️ Willing to be in a relationship with a person who is not perfect.</li>
                    <li>❤️ Willing to be in a relationship with a person who is not perfect.</li>
                    <li>❤️ Expert-level cuddler (non-negotiable).</li>
                    <li>❤️ Knows when to give advice vs. just listen.</li>
                    <li>❤️ Won’t ghost me if I send too many memes.</li>
                    <li>❤️ Understands that "I’m fine" usually means "Ask me again nicely."</li>
                </ul>
            </div>

            <div className="bonus">
                <h3>Bonus Skills (Not Required but Appreciated)</h3>
                <ul>
                    <li>🌟 Can cook a mean breakfast (bonus points for pancakes).</li>
                    <li>🌟 Enjoys spontaneous dance parties in the living room.</li>
                    <li>🌟 Has a pet that can tolerate my shenanigans.</li>
                    <li>🌟 Can handle my obsession with collecting random trivia.</li>
                    <li>🌟 Can laugh at my jokes (or at least fake-laugh).</li>
                    <li>🌟 Can hype me up even when I look like a potato. </li>
                </ul>
            </div>

            <div className="deal-breakers">
                <h3>Deal Breakers</h3>
                <ul>
                    <li>❌ Doesn’t like dogs/pizza/cuddles (pick your struggle).</li>
                    <li><strong>❌ Thinks "Netflix and chill" means actually watching Netflix.</strong></li>
                    <li>❌ Unwilling to participate in dumb couple challenges for fun.</li>
                </ul>
            </div>
        </div>

        <div className="apply-section">
            <h3>Ready to Apply?</h3>
            <h5>If you think you meet these qualifications, please apply below!</h5>
            <h5>Disclaimer: This is a joke. Please do not take it seriously.</h5>
            <h5>But if you do, I’m not responsible for any broken hearts or awkward dates.</h5>

            <Link to="/apply" className="apply-link">
                <button className="apply-button">Apply Now</button>
            </Link>
            
        </div>
    </div>
  );
}

export default Qualifications;