
export default function updateAlumno(state, payload) {
  return {
    ...state,
    alumnos: [
      ...state.alumnos,
      payload
    ]
  };
}




