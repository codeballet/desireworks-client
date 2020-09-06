import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Header = () => {
    return (
        <div>
            <Menu pointing>
                <Menu.Item
                    as={NavLink} to="/"
                    name="groups"
                />
                <Menu.Menu position="right">
                    <Menu.Item
                        as={NavLink} to="/groups/new"
                        name="create group"
                    />
                </Menu.Menu>
            </Menu>
        </div>
    );
};

export default Header;