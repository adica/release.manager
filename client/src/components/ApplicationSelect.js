import React, {Component} from 'react';
import {Card,  CardHeader, CardText} from 'material-ui/Card';
import DDMI from './DropDownMenuItem.js';

class ApplicationSelct extends Component {

  render(){
    const list = [{ 'key' : 1, 'val' : 'a'}, { 'key' : 2, 'val' : 'b'}];
    return (
      <div style={{padding: '14px 24px 24px'}}>
        <Card>
          <CardHeader
            title="Choose Application"
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

export default ApplicationSelct;