const express = require("express")
const router = express.Router()

router.param("userId", (req, res, next, value) => {
    console.log("Maps the parameters from the request")
    next()
});
router.get("/hello",(req,res)=>{
    res.send("Hello Express JS\n" +
        "Awsaf Fida Mahmud\n" +
        "101400761")

})
router.get('/user',(req,res)=>{
    const firstname = req.query.firstname || "pritesh";
    const lastname = req.query.lastname || "patel";
    res.json({ firstname, lastname });
})
router.post('/user/:firstname/:lastname', (req, res) => {
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;
    res.send(JSON.stringify({ firstname, lastname }));
});


module.exports=router
