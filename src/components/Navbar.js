import React, {Component} from 'react';
import menuIcon from "../assets/images/menu.svg";
// import './Navbar.scss';
import {withStyles} from "@material-ui/styles";
import Divider from "./Divider";

const styles = {
    'navbar': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    'logo': {
        fontSize: '1.2rem'
    }
};

class Navbar extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const classes = this.props.classes;
        return (
            <div>
                <div className={classes.navbar}>
                    <span className={classes.logo}>Anass ELBAZ</span>
                    <img className="icon" src={menuIcon} alt="Menu"/>
                </div>
                <Divider />
            </div>
        );
    }
}

export default withStyles(styles)(Navbar);
