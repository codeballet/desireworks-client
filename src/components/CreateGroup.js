import React, { useState } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import { createGroup } from '../api/groups-api';

const CreateGroup = () => {
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
            const group = await createGroup({
                name,
                description
            });
            console.log(`Created group: ${group}`);
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

export default CreateGroup;
