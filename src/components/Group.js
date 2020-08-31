import React from 'react';
import { Card } from 'semantic-ui-react';

const Group = ({ group }) => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>
                    {group.name}
                </Card.Header>
                <Card.Description>
                    {group.description}
                </Card.Description>
            </Card.Content>
        </Card>
    );
};

export default Group;
