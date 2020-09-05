export default (state = [], action) => {
    switch (action.type) {
        case 'GET_GROUPS':
            return action.payload;
        case 'CREATE_GROUP':
            console.log('CREATE_GROUP switch')
            return [...state, action.payload];
        default:
            return state;
    }
}