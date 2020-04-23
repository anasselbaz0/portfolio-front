import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainView from "./components/MainView/MainView";
import './App.css';
import './media-queries.css';
// import colors from "./assets/colors";
import withStyles from "@material-ui/core/styles/withStyles";
import Navigation from "./components/Navigation";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects/Projects";
import colors from "./assets/colors";

const styles = {
    'application': {
        display: 'flex',
        flexDirection: 'column',
        background: colors.DARK,
        color: colors.WHITE,
    },
    'navigation': {
        flex: '0',
    },
    'content': {
        display: 'flex',
        marginTop: '10vh',
        height: '90vh',
    },
    'notNavigation': {
        flex: '1'
    },
    'navbar': {
        width: '100vw',
        height: '10vh',
        position: 'absolute'
    }
};

class App extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const classes = this.props.classes;
        return (
            <Router>
                <div className={classes.application}>
                    <div className={classes.navbar}>
                        <NavBar />
                    </div>
                    <div className={classes.content}>
                        <div className={classes.notNavigation}>
                            <Switch>
                                <Route path="/" exact component={MainView}/>
                                <Route path="/projects" component={Projects}/>
                            </Switch>
                        </div>
                        {/*<div className={classes.navigation}>*/}
                        {/*    <Navigation />*/}
                        {/*</div>*/}
                    </div>
                </div>
            </Router>
        );
    }
}

export default withStyles(styles)(App);
