import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="App-header">
            <div className="logo-container">
                <Link to="/">
                    <img src="img\logo.png" alt="Badminton Organizer logo" />
                </Link>
            </div>
            <div className="sitename-container">
                <div className="sitename">
                    <Link to="/">
                        Badminton <span>Organizer</span>
                    </Link>
                </div>
            </div>
            <div className="menu-container">
                <ul>
                    <li><Link to="/">Setup</Link></li>
                    <li><Link to="/rounds">Rounds</Link></li>
                    <li>Matches (soon)</li>
                </ul>
            </div>
        </header>
    )
}