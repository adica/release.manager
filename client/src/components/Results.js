import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
//import ActionInfo from 'material-ui/svg-icons/action/info';
//import Divider from 'material-ui/Divider';
//import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
//import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500} from 'material-ui/styles/colors';
//import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import Dialog from './Dialog.js';



class ResultsList extends Component {
  static propTypes = {
    data: React.PropTypes.array
  }
  render(){
    const {data} = this.props;

    return (

      <div>
        <List>
        {data.map((item) => {
          return <div key={item.name}>
            <ListItem
              leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
              rightIcon={<Dialog data={item}/>}
              primaryText={
                <span>Tag: {item.name}</span>}
              secondaryText={item.value}
            />

          </div>
        })}
          
         
        </List>
    </div>

      );
  }
}

export default ResultsList;