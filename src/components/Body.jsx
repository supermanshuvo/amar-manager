import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from "./Products"
import Print from "./Print"
import Invoice from "./Invoice"
import Home from './Home';
import Header from './Header';


const Body = () => {
    return(
        <Router>
            <Header />
            <div className="container-fluid mt-2">
                <Switch>
                    <Route exact path="/">
                        <Home />      
                    </Route>
                    <Route path="/product">
                        <Products />        
                    </Route>
                    <Route path="/invoice">
                        <Invoice />        
                    </Route>
                    <Route path="/print">
                        <Print />        
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Body;