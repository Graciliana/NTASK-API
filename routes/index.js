module.exports = app => {
    
    app.get("/", (req, res) => {
        res.json({status: "NTASK-API  esta rodando correto"});
    });
}