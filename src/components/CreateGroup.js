import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Segment, Form, Button } from 'semantic-ui-react';
import { createGroupAction } from '../actions';

const CreateGroup = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [uploadingGroup, setUploadingGroup] = useState(false);

    const onFormSubmit = async (event) => {
        try {
            if (!name || !description) {
                alert('Name and description should be provided!');
                return;
            }
            setUploadingGroup(true)
            props.createGroupAction({
                name,
                description
            });
            alert('Group was created');
        } catch (e) {
            alert(`Could not create group: ${e.message}`);
        } finally {
            setUploadingGroup(false);
            setName('');
            setDescription('');
        }
    }

    return (
        <Segment>
            <h1>Upload new group</h1>
            <Form onSubmit={onFormSubmit}>
                <Form.Field>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </Form.Field>
                <Button loading={uploadingGroup} type="submit">
                    Create
                </Button>
            </Form>
        </Segment>
    );

};

// const mapStateToProps = (state) => {
//     return { groups: state.groups };
// }

export default connect(
    null,
    { createGroupAction }
)(CreateGroup);
