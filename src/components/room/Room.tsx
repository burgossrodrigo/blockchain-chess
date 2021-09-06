/* tslint:disable */
import * as React from 'react';
import Game from '@App/components/app/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../index.css';
import { BrowserRouter as Router,Route , Switch,Link } from "react-router-dom";
export default class Room extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/game/:roomId" component={Game} />
                    <section id="rooms" className="room">
                        <div className="room-me">
                            <div className="row">
                                <div className="col d-flex room-cta-game">
                                    <img src={"/img/room1.jpg"} className="img-fluid mx-auto" />
                                    <Link to={{pathname:"/game/1" }} className="room-cta-free" ></Link>
                                </div>
                                <div className="col d-flex room-cta-game">
                                    <img src={"/img/room-2.jpg"} className="img-fluid mx-auto" />
                                    <Link to={{pathname:"/game/2"}} className="room-cta-free room-cta-btn_0_5"></Link>
                                </div>
                                <div className="col d-flex room-cta-game">
                                    <img src={"/img/room-3.jpg"} className="img-fluid mx-auto" />
                                    <Link to={{pathname:"/game/3"}} className="room-cta-free room-cta-btn_01"></Link>
                                </div>
                                <div className="col d-flex room-cta-game">
                                    <img src={"/img/room-4.jpg"} className="img-fluid mx-auto" />
                                    <Link to={{pathname:"/game/4"}} className="room-cta-free room-cta-btn_02"></Link>
                                </div>
                                <div className="col d-flex room-cta-game">
                                    <img src={"/img/room-5.jpg"} className="img-fluid mx-auto" />
                                    <Link to={{pathname:"/game/5"}} className="room-cta-free room-cta-btn_05"></Link>
                                </div>
                            </div>
                            <div className="row mt-5 pb-5">
                                <div className="col d-flex room-cta-game">
                                    <img src={"/img/room-6.jpg"} className="img-fluid mx-auto" />
                                    <Link to={{pathname:"/game/6"}} className="room-cta-free room-cta-btn_10"></Link>
                                </div>
                                <div className="col d-flex room-cta-game">
                                    <img src={"/img/room-7.jpg"} className="img-fluid mx-auto" />
                                    <Link to={{pathname:"/game/7"}} className="room-cta-free room-cta-btn_20"></Link>
                                </div>
                                <div className="col d-flex room-cta-game">
                                    <img src={"/img/room-8.jpg"} className="img-fluid mx-auto" />
                                    <Link to={{pathname:"/game/8"}} className="room-cta-free room-cta-btn_30"></Link>
                                </div>
                                <div className="col d-flex room-cta-game">
                                    <img src={"/img/room-9.jpg"} className="img-fluid mx-auto" />
                                    <Link to={{pathname:"/game/9"}} className="room-cta-free room-cta-btn_50"></Link>
                                </div>
                                <div className="col d-flex room-cta-game">
                                    <img src={"/img/room-10.jpg"} className="img-fluid mx-auto" />
                                    <Link to={{pathname:"/game/10"}} className="room-cta-free room-cta-btn_100"></Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </Switch>
            </Router>

        )
    }
}
