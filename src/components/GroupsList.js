import React, { useState, useEffect } from 'react';
import { Segment, Card } from 'semantic-ui-react';
import Group from './Group';
import { getGroups } from '../api/groups-api';

const GroupsList = () => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const result = await getGroups();
                setGroups(result);
            } catch (e) {
                alert(`Failed to fetch groups: ${e.message}`)
            }
        };
        fetchGroups();
    }, []);

    const renderedGroups = groups.map((group) => {
        return <Group key={group.id} group={group} />
    });
    
    return (
        <Segment>
            <h1>Groups</h1>
            <Card.Group>
                {renderedGroups}
            </Card.Group>
        </Segment>
    );
}

export default GroupsList;
