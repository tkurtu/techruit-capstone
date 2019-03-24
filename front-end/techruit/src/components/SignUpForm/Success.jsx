import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Confirm extends Component {
  render () {
  const { classes } = this.props;

    return (
      <div>
        <Typography> thank you </Typography>
        <Link to="/">
        <Button>
          back to techruit
        </Button>
        </Link>
      </div>
    )
  }

}

const styles = themes => ({
})

export default withStyles(styles)(Confirm);