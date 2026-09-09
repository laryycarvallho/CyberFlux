const testEvent = (req, res) => {
    res.json({
        status: 'ok',
        message: 'Controller de eventos funcionando!'
    });
};

module.exports = { testEvent };
