import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class DialogExampleSimple extends React.Component {
  static propTypes = {
    data: React.PropTypes.object
  }

  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const {data} = this.props;
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];

    return (
      <div>
        <RaisedButton label="Open" style={{'float':'right'}} onTouchTap={this.handleOpen} />
        <Dialog
          title={data.name}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <div>Tag: <span> {data.name}</span></div>
        <div>File: <span><a href='#'> {data.value}</a></span></div>
        <div>Method: <span>sessionSave()</span></div>
        <div>Author: <span><a href="#">Avichay Eyal</a></span></div>
        
        </Dialog>
      </div>
    );
  }
}