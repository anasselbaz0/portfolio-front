import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import colors from "../assets/colors";
import {Link} from "react-router-dom";

const styles = {
    'logo': {
        fontSize: '1rem',
        fontFamily: 'Playfair Display',
        fontWeight: '900',
        letterSpacing: '1px',
        position: 'absolute',
        top: '30%',
        left: '2rem',
        width: 'max-content',
        zIndex: '2'
    },
    'background': {
        position: 'relative',
        width: '3rem',
        height: '3rem',
        background: colors.LIGHT_BLUE_30,
        cursor: 'pointer',
    }
};

class Logo extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const classes = this.props.classes;
        return (
            <Link to="/">
                <div className={classes.background}>
                    <span className={classes.logo}>Anass ELBAZ</span>
                </div>
            </Link>
        );
    }
}

export default withStyles(styles)(Logo);
