const express = require('express');
const router = express.Router();
const User = require('../models/User');
const fetchUser = require('../middleware/fetchUser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');
//ROUTE 1:- Get all the notes using the GET Request endpoint which is  /fetchallnotes
router.get('/fetchallnotes', fetchUser, async (req, res) => {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
});
//ROUTE 2:- Get all the notes using the GET Request endpoint which is  /addnotes
router.post('/addnote', fetchUser, [
    body('title', 'Enter the valid title').isLength({ min: 3 }),
    body('description', 'Description Must Be At least 5 Characters').isLength({ min: 10 })
],
    async (req, res) => {

        try {


            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });

            }

            const { title, description, tag } = req.body;
            const note = new Notes({ title, description, tag, user: req.user.id });

            const savedNote = await note.save();
            res.send(savedNote);
        } catch (error) {
            console.error(error.message);
            res.status(500).json({error: "Internal Server Error"});
        }
    });

module.exports = router;