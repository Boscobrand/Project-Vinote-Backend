
const express = require("express");
const router = express.Router();
const Wine = require('../models/Wine')
const { handleValidateId,  handleRecordExists, } = require('../middleware/custom_errors');


// GET 
router.get('/', (req, res, next) => {
    Wine.find()
        .populate('name','_id')
        .then((wines)=>res.json(wines))
        .catch(next);
});

// CREATE
// POST
router.post('/', (req, res, next) => {
    Wine.create(req.body).catch(next);
    // Wine.create(req.body).then((wine) => res.status(200).json(wine)).catch(next);
});

// UPDATE
// PUT 
router.put('/:id', handleValidateId, (req, res, next) => {
    Wine.findOneAndUpdate({_id: req.params.id}, req.body, {new: true,})
    .then(handleRecordExists)
    .then(wine => {
          res.json(wine);
        }
      ).catch(next);
    
})

// DESTROY
// DELETE 
router.delete('name', (req, res, next) => {
    Wine.findOneAndDelete({_id: req.params.id,})
    .then(handleRecordExists)
    .then(wine => {
        res.sendStatus(204);
        }
      ).catch(next);
    
})

module.exports = router;