import { apiEndpoint } from '../config';

export async function getGroups() {
    console.log('Fetching groups');

    const response = await fetch(`${apiEndpoint}/groups`);
    const result = await response.json();

    return result.items;
}

export async function createGroup(newGroup) {
    const reply = await fetch(`${apiEndpoint}/groups`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: newGroup.name,
            description: newGroup.description
        })
    });
    const result = await reply.json();
    return result.newItem;
}