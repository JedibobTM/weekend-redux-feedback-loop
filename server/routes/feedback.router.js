const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')



// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {
    const sqlText = `INSERT INTO "feedback"("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);`;

    let feedback = req.body;

    const sqlValues = [feedback.feeling, feedback.understanding, feedback.support, feedback.comments];
    pool.query(sqlText, sqlValues).then(result => {
        res.sendStatus(200);
    }).catch((dbError) => {
        console.log("ERROR YOU MADE A GRAVE MISTAKE", dbError);
        res.sendStatus(500);
    })
    
})


// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
    console.log('testing')
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;