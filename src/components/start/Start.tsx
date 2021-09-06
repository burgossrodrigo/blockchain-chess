/* tslint:disable */
import * as React from 'react';
import {BrowserRouter as Router, Route , Switch, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Room from '@App/components/room/Room';
import getBlockchain from '../Ethers/Ethers';


export default class Start extends React.Component {
    


    render() {

        getBlockchain();

        return (
            <Router>
                <Switch>
                    <Route exact path="/room" component={Room} />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 d-flex cta">
                                <img src={"/img/win_end.png"} className="img-fluid mx-auto"/>
                                <Link to={{pathname: "/room"}} className="cta2"></Link>
                            </div>
                        </div>
                    </div>
                </Switch>

            </Router>
        )
    }
}
