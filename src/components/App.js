import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Header from './Header';
import GroupsList from './GroupsList';
import CreateGroup from './CreateGroup';

export default () => {
    return(
        <Container>
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={GroupsList} />
                <Route path="/groups/new" component={CreateGroup} />
            </BrowserRouter>
        </Container>
    );
};
