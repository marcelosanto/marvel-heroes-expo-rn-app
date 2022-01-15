export const initialState = {
  perfil: [],
  filterHeroi: true,
}

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setPerfil':
      return { ...state, perfil: action.payload.perfil }
    case 'setFilterHeroi':
      return { ...state, filterHeroi: action.payload.filterHeroi }
    default:
      return state
  }
}
