export default function updateAction(state, payload) {
  return {
    ...state,
    data: {
      ...state.data,
      ...payload
    }
  };
}


export function updateColor(state, payload) {
  return {
    ...state,
    color: [
      ...state.color,
      ...payload
    ]
  }
}