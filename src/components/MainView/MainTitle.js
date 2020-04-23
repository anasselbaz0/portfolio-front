import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import colors from "../../assets/colors";

const styles = {
    'background': {
        width: '30vw',
        height: '80vh',
        background: colors.MIDDLE_BLUE,
        opacity: '.5',
        float: 'right',
        position: 'absolute',
        top: '-10%',
        right: '-20vw',
        zIndex: '-10'
    },
    'title': {
        fontFamily: 'Playfair Display',
        textTransform: 'uppercase',
        fontWeight: '900',
        letterSpacing: '4px',
        margin: '3% 40%',
        textAlign: 'left',
        position: "relative",
        zIndex: '1'
    },
    'scrollText': {
        fontWeight: '400',
        fontSize: '1rem',
        letterSpacing: '1px',
        lineHeight: '3px',
        // position: 'absolute',
        // bottom: '-1rem',
        // right: '-10rem',
        width: 'max-content',
        // zIndex: '1',
        textTransform: 'none',
        marginTop: '2rem'
    },
    'big': {
        fontSize: '2.5rem',
        lineHeight: '3rem'
    }
};

class MainTitle extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const classes = this.props.classes;
        return (


                    <div className={classes.title}>
                        <div className={classes.big}>not your<br/>average<br/>software<br/>engineer</div>
                        <div className={classes.scrollText}>Hi! Please scroll down!</div>
                        <div className={classes.background}/>
                    </div>

        );
    }
}

export default withStyles(styles)(MainTitle);
