
export default function updateTiro(state, payload) {
  return {
    ...state,
    tiros: [
      ...state.tiros,
      payload
    ]
  };
}