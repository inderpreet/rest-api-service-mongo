async function getDockStatus(req, res) {
    let ret = [
        {
            DockTitle: "Dock 1",
            DockDesc: "Description",
            DockState: "Leveller Deployed",
            CtrlId: "abcdef",
            Time: "1123456"
        },
        {
            DockTitle: "Dock 2",
            DockDesc: "Description",
            DockState: "Leveller Deployed",
            CtrlId: "123jhbhf",
            Time: "1123456"
        }
    ]
    res.send(ret);
}

module.exports = getDockStatus;
