import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import scroll from "../../assets/images/scroll.svg";
import colors from "../../assets/colors";

const styles = {
    'description': {
        float: 'right',
        fontSize: '.8rem',
        marginBottom: '2rem',
        marginLeft: '1rem',
        zIndex: '3',
        color: colors.GRAY,
    },
    'scroll': {
        textAlign: 'center',
        marginBottom: '1rem',
        cursor: 'pointer',
    },
    'mainDown': {
        marginTop: '2rem',
        display: 'flex',
        flexDirection: 'column'
    }
};

class MainDown extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.mainDown}>
                <div className={classes.description}><i>Front End Developer, UI/UX Designer from Casablanca, Morocco</i></div>
                <div className={classes.scroll}><img src={scroll} alt="scroll"/></div>
            </div>
        );
    }
}

export default withStyles(styles)(MainDown);
