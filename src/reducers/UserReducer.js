export const initialState = {
  perfil: [],
  filterHeroi: true,
  filterVilao: true,
  filterAntiHeroi: true,
  filterAlien: true,
  filterHumano: true,
}

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setPerfil':
      return { ...state, perfil: action.payload.perfil }
    case 'setFilterHeroi':
      return { ...state, filterHeroi: action.payload.filterHeroi }
    case 'setFilterVilao':
      return { ...state, filterVilao: action.payload.filterVilao }
    case 'setFilterAntiHeroi':
      return { ...state, filterAntiHeroi: action.payload.filterAntiHeroi }
    case 'setFilterAlien':
      return { ...state, filterAlien: action.payload.filterAlien }
    case 'setFilterHumano':
      return { ...state, filterHumano: action.payload.filterHumano }
    default:
      return state
  }
}
