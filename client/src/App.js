import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';

export default function App() {
    return (
        <>
           <Router>
               <Switch>
                   <Route exact path='/' component={Home}></Route>
                   <Route path='' component={Detail}></Route>
               </Switch>
           </Router>
        </>
    );
}