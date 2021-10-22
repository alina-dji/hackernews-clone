import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <nav>
                <ul>
                    <li><Link to=''>Guidelines</Link></li>
                    <li><Link to=''>FAQ</Link></li>
                    <li><Link to=''>Lists</Link></li>
                    <li><Link to=''>API</Link></li>
                    <li><Link to=''>Security</Link></li>
                    <li><Link to=''>Legal</Link></li>
                    <li><Link to=''>Apply to YC</Link></li>
                    <li><Link to=''>Contact</Link></li>
                </ul>
            </nav>
            <div>
                <label for="search">Search:</label>
                <input type="text" name="search" id="search"></input>
            </div>
        </footer>
    );
}