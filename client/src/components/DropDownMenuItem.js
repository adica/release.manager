import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';



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
        <DropDownMenu  value={this.state.value} onChange={this.handleChange}>
          {data.map((item) => {
            return <MenuItem key={item.key} value={item.val} id={item.key} primaryText={item.val} />
          })}
        </DropDownMenu>
      </div>
    );
  }
}