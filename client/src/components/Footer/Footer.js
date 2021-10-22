import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <nav className={classes.nav}>
                <ul className={classes.navlinks}>
                    <li><Link to=''>Guidelines</Link></li>
                    <span>|</span>
                    <li><Link to=''>FAQ</Link></li>
                    <span>|</span>
                    <li><Link to=''>Lists</Link></li>
                    <span>|</span>
                    <li><Link to=''>API</Link></li>
                    <span>|</span>
                    <li><Link to=''>Security</Link></li>
                    <span>|</span>
                    <li><Link to=''>Legal</Link></li>
                    <span>|</span>
                    <li><Link to=''>Apply to YC</Link></li>
                    <span>|</span>
                    <li><Link to=''>Contact</Link></li>
                </ul>
            </nav>
            <div className={classes.search}>
                <label htmlFor="search">Search:</label>
                <input type="text" name="search" id="search"></input>
            </div>
        </footer>
    );
}