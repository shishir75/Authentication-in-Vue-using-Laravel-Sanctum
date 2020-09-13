export default {
    state: {
        user: null
    },
    getters: {
        isLoggedIn(state) {
            return state.user !== null;
        }
    },
    mutations: {
        setAuthUser(state, payload) {
            return (state.user = payload);
        }
    },
    actions: {}
};
