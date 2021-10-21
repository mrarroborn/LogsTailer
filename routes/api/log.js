const express = require('express');
const router = express.Router();
const fs = require('fs');
var messageFile = "logs.txt";

// APi to get alll the content of log file
router.get('/get',async (req,res) => {
    var data = fs.readFileSync(messageFile, 'utf8');
    var lines = data.split("\n");
    res.send(lines)
});

// Api to append content to log file
router.post('/add',
 async (req,res) => {
    try {
     const fs = require('fs');
     fs.appendFileSync(messageFile, '03/22 08:51:06 INFO   :...read_physical_netif: index #3, interface LINK12 has address 9.67.101.1, ifidx g6fg09\n');
     res.send('Data Inserted');
    }
    catch (err) {
        console.error(err.message);
     res.status(500).send('Server Error');
    }
 });

module.exports = router;