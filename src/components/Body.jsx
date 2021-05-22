import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from "./Products"

import Print from "./Print"

import Invoice from "./Invoice"


const Body = () => {
    return(
        <Router>
            <div className="container-fluid mt-2">
                <Switch>
                    <Route exact path="/">
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