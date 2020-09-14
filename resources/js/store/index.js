export default {
    state: {
        isLoggedIn: null
    },
    getters: {
        isLoggedIn(state) {
            return state.isLoggedIn !== null;
        }
    },
    mutations: {
        isLogIn(state, payload) {
            return (state.isLoggedIn = payload);
        }
    },
    actions: {}
};
