import { HYDRATE } from "next-redux-wrapper";


const rootState = {
  isModal: false
}

const rootReducer = (state = rootState, action) => {
  switch (action.type) {
    case HYDRATE: return {...state, ...action.payload};
    case "SET_MODAL": {
      return { ...state, isModal: action.payload }
    }
    default: return { ...state }
  }
}

export default rootReducer