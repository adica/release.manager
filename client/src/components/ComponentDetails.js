import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ActionBuild from 'material-ui/svg-icons/action/build';
import ComponentVersions from './ComponentVersions';

class ComponentDetails extends React.Component {
	render() {
		const data = this.props.details;

		return (
			<div>
				<List>
			      <ListItem primaryText={'Name: ' + data.name} leftIcon={<ActionGrade/>} />
			      <ListItem primaryText="Latest Build: v1.9.11" leftIcon={<ActionBuild />} />
			      <ComponentVersions details={data} />
			    </List>
			</div>
		);
	}
}

export default ComponentDetails;