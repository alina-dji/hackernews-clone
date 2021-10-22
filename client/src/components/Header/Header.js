import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div>
                <Link to='/'>Hacker News</Link>
            </div>
            <nav>
                <ul>
                    <li><Link to=''>new</Link></li>
                    <li><Link to=''>past</Link></li>
                    <li><Link to=''>comments</Link></li>
                    <li><Link to=''>ask</Link></li>
                    <li><Link to=''>show</Link></li>
                    <li><Link to=''>jobs</Link></li>
                    <li><Link to=''>submit</Link></li>
                </ul>
            </nav>
        </header>
    );
}