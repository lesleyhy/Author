const express = require('express')

const {
    handleCreate,
    handleGetAll,
    handleGetOneById,
    handleDeleteOneById,
    handleUpdateOneById,
    handleCreateMany,
} = require('../controllers/author.controller');

const router = express.Router();

router.post('/', handleCreate);
router.post('/many', handleCreateMany);
router.get('/all',handleGetAll);
router.get('/:id',handleGetOneById);
router.delete('/:id',handleDeleteOneById);
router.put('/:id',handleUpdateOneById);


module.exports = {authorRouter:router}