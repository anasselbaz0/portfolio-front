import React, { Component } from 'react'
import colors from '../assets/colors'
import { withStyles } from '@material-ui/styles'

const styles = {
    divider: {
        height: '1px',
        display: 'block',
        position: 'relative',
        margin: '0 1rem',
        background: 'transparent',
        borderBottom: '1px solid ' + colors.WHITE,
    },
    dividerContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    text: {
        textTransform: 'uppercase',
        marginRight: 5,
        marginLeft: 5,
        color: colors.LIGHT_1,
        letterSpacing: 1,
        fontSize: 10,
        lineHeight: '1rem',
    }
};

class Divider extends Component {

// eslint-disable-next-line no-useless-constructor
constructor(props) {
    super(props);
}

    render() {
        const { classes } = this.props;
        return (
            this.props.text ?
                (
                    <div className={classes.dividerContainer}>
                        <b className={classes.divider} style={{width: this.props.widht}}/>
                            <span className={classes.text}> { this.props.text }  </span>
                        <b className={classes.divider} style={{width: this.props.widht}}/>
                    </div>
                )
            :
                (
                    <b className={classes.divider} style={{width: this.props.widht}} />
                )
        )
    }
}

export default withStyles(styles)(Divider)
