const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();
router.get('/', (req, res) => res.send('Welcome'));

router.post('/users', controllers.createUser);
router.get('/users', controllers.getAllUsers);
router.get('/users/:id', controllers.getUserById);
router.put('/users/:id', controllers.updateUser);
router.delete('/users/:id', controllers.deleteUser);
// En routes/index.js
router.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', version: '1.0.0' });
});

module.exports = router;