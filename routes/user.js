const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    res.send('User list')
    })
    
    router.get('/login', (req, res) =>{
        res.json({ "Username": "Jarred", "Password": "Elbert"})
    })

    // router.get('/:id', (req,res) => {
    //     req.params.id
    //     res.send(`Get users with ${req.params.id}`)
    // })

    module.exports = router;