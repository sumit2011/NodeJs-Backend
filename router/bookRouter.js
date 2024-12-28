const express = require("express");
const router = express.Router();

// http://localhost:3001/users
router.get("/", (req,res,next) => {
    res.status(200).json({
        message: "successful - GET",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    })
});

// http://localhost:3001/users/1
router.get("/:id" , (req,res,next) =>{
    res.status(200).json({
        message: "successful GET by Id",
        metadata: {
            id: req.params.id,
            hostname: req.hostname,
            method: req.method,
        }
    })
})

// http://localhost:3001/users
router.post("/", (req,res,next) => {
    const name = req.body.name;
    res.status(201).json({
        message: "successful - POST",
        metadata: {
            name: name,
            hostname: req.hostname,
            method: req.method,
        },
    })
});

// http://localhost:3001/users/1
router.put("/:id" , (req,res,next) =>{
    res.status(200).json({
        message: "successful PUT by Id",
        metadata: {
            id: req.params.id,
            hostname: req.hostname,
            method: req.method,
        }
    })
})

// http://localhost:3001/users/1
router.delete("/:id" , (req,res,next) =>{
    res.status(200).json({
        message: "successful DELETE by Id",
        metadata: {
            id: req.params.id,
            hostname: req.hostname,
            method: req.method,
        }
    })
})

module.exports = router;