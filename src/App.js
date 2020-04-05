import React, {Component} from "react";
import {withStyles} from "@material-ui/styles";
import Navbar from "./components/Navbar";
import './App.css';
import colors from './assets/colors.js';


const styles = {
    'application': {
        'height': '100vh',
        'background': colors.GRAY_1,
        'color': colors.LIGHT_1,
        'padding': '1rem',
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
            <div className={classes.application}>
                <Navbar />
            </div>
        );
    }
}

export default withStyles(styles)(App);
