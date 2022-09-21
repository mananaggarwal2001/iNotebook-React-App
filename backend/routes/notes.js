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
            res.status(500).json({ error: "Internal Server Error" });
        }
    });

// Route no 3: Update the Existing Note using PUT /api/auth/updateNote note option.

router.put('/updateNote/:id', fetchUser, async (req, res) => {
    const { title, description, tag } = req.body;
    console.log(title);
    // Now how to update the notes in the given id.
    let note = await Notes.findById(req.params.id);
    if (!note) {
        res.status(404).send("Not Found");
    }
    const NewNote = {};
    if (title) { NewNote.title = title };
    if (description) { NewNote.description = description };
    if (tag) { NewNote.tag = tag };
    // if the users the unauthorized user then  we have to do this.
    if (note.user.toString() !== req.user.id) {
        res.status(401).send("Not Allowed");
    }
    // if the user is authorized then we have to update the note.
    note = await Notes.findByIdAndUpdate(req.params.id, { $set: NewNote }, { new: true });
    res.json({ updatedNote: note });
});


// Route No 4 :- Delete the Exsiting Note using Endpoint DELETE :- /api/auth/deleteNote


router.delete('/deleteNote/:id', fetchUser, async (req, res) => {
    const id = req.params.id;

    // find the note to be deleted in the given existing note.
    let note = await Notes.findById(id);
    if (!note) {
        res.status(404).send("Not Found");

    } else {

        // for verifying whether the operation is done on the user is whether the authorized user or not.
        // Allow Deletion only if the user owns this note.
        if (note.user.toString() !== req.user.id)
        {
            res.status(401).send("Illegal Operation");
        }
        try {

            note = await Notes.findByIdAndDelete(id);
            res.json({ "success": "Notes has been deleted" });
        } catch (error) {
            console.log(error.message);
            res.status(501).send("Internal Server error");
        }
    }
});


module.exports = router;