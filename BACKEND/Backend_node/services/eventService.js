const eventService = (req, res) => {
    res.json({
        status: 'ok',
        message: 'Serviço de eventos funcionando!'
    });
};

application.get ('/service', eventService);

module.exports = { eventService };

