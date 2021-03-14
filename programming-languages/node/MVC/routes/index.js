import express from 'express';

const router = express.Router();

// Rutas

/*  
req: lo que le enviamos a express
res: lo que express responde
*/

// Callback arrow function: mostrar en pantalla
router.get('/', (req, res) => {
  res.send('Welcome');
})

// Callback arrow function: mostrar una vista
router.get('/render', (req, res) => {
  res.render('Hello World');
})

// Callback arrow function: retornar un json
router.get('/json', (req, res) => {
  res.json({'id': 42});
})

export default router;