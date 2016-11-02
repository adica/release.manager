import React, {Component} from 'react';
import {Card,CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Radium from 'radium';

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
            base: {
              margin: '14px 24px',
              maxWidth: '250px',
              height: '390px',
              float: 'left',
              ':hover': {
                boxShadow: '0 10px 40px #878787',
                cursor: 'pointer'
              }
            }
          };

    return (
      <div>
        {list.map((item) => {
          return <div key={item.key} style={compoenentStyle.base}>
            <Card>
              <CardMedia>
                <img src={'/images/' + item.icon} />
              </CardMedia>
               <CardTitle title={item.val} subtitle={item.desc} />
              <CardActions>
                  <RaisedButton label="Release" />
                  <RaisedButton label="Deploy" href={'#deploy/' + item.val} />
              </CardActions>
            </Card>
          </div>
        })}
      </div>
    );
  }
}

export default Radium(Selection);