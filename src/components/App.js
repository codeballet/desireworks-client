import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import GroupsList from './GroupsList';
import CreateGroup from './CreateGroup';

export default () => {
    return(
        <Container>
            <Grid container stackable verticalAlign="middle">
                <Grid.Row>
                    <Grid.Column width={16}>
                        <GroupsList />
                        <CreateGroup />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};
