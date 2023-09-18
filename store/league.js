export const state = () => ({
    league: []
})

export const mutations = {
    setLeague(state, league) {
        state.league = league
    }
}

export const actions = {
    async fetch({commit}) {
        const res = await this.$axios.$get('api/competitions/')
        const league = res.competitions;
        commit('setLeague', league)
    }
}

export const getters = {
    league: s => s.league
}