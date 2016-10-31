import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ActionBuild from 'material-ui/svg-icons/action/build';
import ComponentVersions from './ComponentVersions';

const ComponentDetails = () => (
  <div>
    <List>
      <ListItem primaryText="Name: BASEJEWELRY" leftIcon={<ActionGrade/>} />
      <ListItem primaryText="Latest Build: v1.9.11" leftIcon={<ActionBuild />} />
      <ComponentVersions />
    </List>
  </div>
);

export default ComponentDetails;