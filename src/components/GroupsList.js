import React from 'react';
import { connect } from 'react-redux';
import { Segment, Card } from 'semantic-ui-react';
import { getGroupsAction } from '../actions'
import Group from './Group';

class GroupsList extends React.Component {
    componentDidMount() {
        this.props.getGroupsAction();
    }

    renderGroups() {
        return this.props.groups.map(group => {
            return <Group key={group.id} group={group} />
        });
    }
    
    render() {
        return(
            <Segment>
                <h1>Groups</h1>
                <Card.Group>
                    {this.renderGroups()}
                </Card.Group>
            </Segment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        groups: state.groups
    }; 
}

export default connect(
    mapStateToProps,
    { getGroupsAction }
)(GroupsList);
