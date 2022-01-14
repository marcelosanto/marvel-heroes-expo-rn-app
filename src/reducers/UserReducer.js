export const initialState = {
  perfil: [],
}

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setPerfil':
      return { ...state, perfil: action.payload.perfil }
    default:
      return state
  }
}
