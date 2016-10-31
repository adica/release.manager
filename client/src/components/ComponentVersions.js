import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


const ComponentVersions = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Release Title</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>v1.8.0</TableRowColumn>
        <TableRowColumn>Add JS ext. support</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>v1.7.0</TableRowColumn>
        <TableRowColumn>Fix BUG#433</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>v1.6.9</TableRowColumn>
        <TableRowColumn>Template engine support </TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>v1.6.8</TableRowColumn>
        <TableRowColumn>First release</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

export default ComponentVersions;