import { Link } from 'react-router-dom';
import classes from './Header.module.css';

export default function Header() {
    return (
        <header className={classes.header}>
            <Link to='/' className={classes.homelink}>
                <div className={classes.ybox}>Y</div>
                <span className={classes.hn}>Hacker News</span>
            </Link>
            <nav className={classes.nav}>
                <ul className={classes.navlinks}>
                    <li><Link to=''>new</Link></li>
                    <span>|</span>
                    <li><Link to=''>past</Link></li>
                    <span>|</span>
                    <li><Link to=''>comments</Link></li>
                    <span>|</span>
                    <li><Link to=''>ask</Link></li>
                    <span>|</span>
                    <li><Link to=''>show</Link></li>
                    <span>|</span>
                    <li><Link to=''>jobs</Link></li>
                    <span>|</span>
                    <li><Link to=''>submit</Link></li>
                </ul>
            </nav>
        </header>
    );
}