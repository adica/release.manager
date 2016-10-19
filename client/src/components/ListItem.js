import React, {Component} from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

class Selection extends Component {

  static propTypes = {
    data: React.PropTypes.array
  }

  constructor(props) {
    super(props);
  }

  render(){
    const list = this.props.listOfItems,
          compoenentStyle = {
            padding: '14px 24px',
            maxWidth: '300px',
            float: 'left'
          };

    return (
      <div>
        {list.map((item) => {
          return <div key={item.key} style={compoenentStyle}>
            <Card>  
              <CardMedia
                overlay={<CardTitle title={item.val} subtitle={item.desc} />}
              >
                <img src={'/images/' + item.icon} />
              </CardMedia>       
            </Card>
          </div>
        })}
      </div>
    );
  }
}

export default Selection;