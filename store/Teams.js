export const state = () => ({
    Teams: []
})

export const mutations = {
    setTeams(state, Teams) {
        state.Teams = Teams
    }
}

export const actions = {
    async fetch({commit}) {
        const res = await this.$axios.$get('api/teams/')
        const Teams = res.teams;
        commit('setTeams', Teams)
    }
}

export const getters = {
    Teams: s => s.Teams
}