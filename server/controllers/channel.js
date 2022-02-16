const Channel = require('../models/Channel');

exports.createChannel = (req, res, next) => {
    const channel = new Channel({ name: req.body.name });
    channel.save()
        .then(() => res.status(201).json({ message: 'Canal créé !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteChannel = (req, res, next) => {
    Channel.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(200).json({ message: 'Canal supprimé !' });
        })
        .catch(error => res.status(400).json({ error }));
};

exports.listChannels = (req, res, next) => {
    Channel.find()
        .then((channels) => {
            res.status(200).json(channels)
        })
        .catch(error => res.status(400).json({ error }));
};

exports.getOneChannel = (req, res, next) => {
    Channel.findOne({ _id: req.params.id })
        .then(channel => res.status(200).json(channel))
        .catch(error => res.status(404).json({ error }));
};