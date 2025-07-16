import '../components/homePage.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
        <div className="home-container">
            <h1 className="home-title">Welcome To Bav's GirlFriend Application</h1>
            <p className="home-subtitle">Apply here ↓ </p>
            <Link to="/qualifications" className="home-link">
                <button className="home-button">Explore the qualifications</button>
            </Link>
        </div>
    )
}

export default Home;