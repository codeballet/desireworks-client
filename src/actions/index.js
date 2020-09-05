import { getGroups, createGroup } from '../api/groups-api';

export const getGroupsAction = () => async dispatch => {
    const response = await getGroups();
    dispatch({ type: 'GET_GROUPS', payload: response });
}

export const createGroupAction = (group) => async dispatch => {
    console.log('CREATE_GROUP action ')
    const response = await createGroup(group);
    dispatch({ type: 'CREATE_GROUP', payload: response });
}