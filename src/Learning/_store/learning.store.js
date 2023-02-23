
const state = () =>({
  isLoaded: false,
  errors: [],
  level1Completed: false,
  level2Completed: false
});
  

const getters = {
  isLoaded: state => state.isLoaded,
  getErrors: state => state.errors,
  getLevel1Completed: state => state.level1Completed,
  getLevel2Completed: state => state.level2Completed
};

const actions = {

  doAction( { commit, state, rootState }, payload ){
    commit('SET_ERRORS', []);

    homeService.doNothing( (result) => {
      if(result.errors){
        commit('SET_ERRORS', result.errors);
      } else {
        commit('DO_MUTATION', result.data );
      }
    });
  },

  setLevelCompleted( {commit,state, rootState}, payload){
    if(payload==1) commit('SET_LEVEL1_COMPLETED', payload);
    if(payload==2) commit('SET_LEVEL2_COMPLETED', payload);
  }

};

const mutations = {
  SET_ERRORS(state, payload){
    state.errors = payload;
  },

  SET_LEVEL1_COMPLETED( state, payload ){
    state.level1Completed = payload;
  },

  SET_LEVEL2_COMPLETED( state, payload ){
    state.level2Completed = payload;
  },


};

export const learning = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};