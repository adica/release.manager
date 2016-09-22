import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 200,
  },
};

export default class DropDownMenuItem extends React.Component {
  static propTypes = {
    data: React.PropTypes.array
  }

  constructor(props) {
    super(props);
    this.state = {value: 1}; 
  }

  handleChange = (event, index, value) => this.setState({value});


  render() {
    const {data} = this.props;

    return (
      <div>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          {data.map((item) => {            
            <MenuItem value={1} id={item.val} primaryText="BASEWIDGET" />           
           })}
        </DropDownMenu>
      </div>
    );
  }
}