import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

class ProfileModal extends React.Component {
  render() {
    console.log(this.props.companyName)
   
    const { classes } = this.props;
    return (
      <section className={classes.root}>
        <Modal 
        onClose={this.props.handleClose} 
        open={this.props.open} 
        className={classes.modal}>
          <Card className={classes.paper}>
            <Typography variant="h6" id="modal-title">
            {this.props.companyName}
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              text inside the modal.
            </Typography>
          </Card>
        </Modal>
      </section>
    );
  }
}

const styles = themes => ({
  root: {
    flexGrow: 1,
    width: 300,
    margin: '10px 0'
  },

  modal: {
    position: 'absolute',
    width: 450,
    textAlign: 'center',
    margin: '0 auto',
    top: '30%',
    [themes.breakpoints.down('sm')]: {
      width: '75%'
    }
  },

  paper: {
    height: 500
  }
});

export default withStyles(styles)(ProfileModal);


// console.log(this.props.recruiters)
    // const profileDetails = this.props.recruiters.filter(recruiter => {
    //   return recruiter === this.props.recruiters[0].companyName
        
    //     // companyName={recruiter.companyName}
    //     // description={recruiter.description}
    //     // lookingFor={recruiter.lookingFor}
    //     // id={recruiter.id}
    //     // >
    
      
    // })

    // // // const profileDetails = {...this.props.recruiters}
    // console.log(profileDetails)

       // const profileInfo = this.props[0].props;
    // console.log(profileInfo.companyName);

    // const currentRecruiter = this.props.recruiters.filter(recruiter => {
    //   return recruiter.id === this.props.match.params.id
    // });
    // console.log(currentRecruiter);
    // const profile = currentRecruiter[0];
    // console.log(profile)