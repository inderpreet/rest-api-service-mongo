
async function getDockTraffic(req, res){
        ret = {
                used: 5,
                unused: 2,
                blocked: 0,
        }
        res.send(ret);
}


module.exports = getDockTraffic;
