import React, {Component} from 'react';
import {Card,  CardHeader, CardText} from 'material-ui/Card';
import DDMI from './DropDownMenuItem.js';

class Selection extends Component {

  static propTypes = {
    data: React.PropTypes.array
  }

  constructor(props) {
    super(props);
  }

  render(){
    const list = this.props.listOfItems,
          title = this.props.title;
    return (
      <div style={{padding: '14px 24px 24px'}}>
        <Card>
          <CardHeader
            title={title}
            subtitle=""
          />
          <CardText>
           <DDMI data={list} />
          </CardText>
        </Card>
      </div>
    );
  }
}

export default Selection;