const User = require('../models/User');

exports.nick = (req, res, next) => {
    const user = new User({ nickname: req.body.nickname });
    user.save()
        .then(() => {
            res.status(201).json({ message: 'Utilisateur créé !' });
            console.log(user);
            //res.send(user);
        })
        .catch(error => res.status(400).json({ error }))
};

exports.log = (req, res, next) => {
    User.findOne({ nickname: req.body })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' })
            }
        })
        .catch(error => res.status(500).json({ error }));
};

exports.getUsers = (req, res, next) => {
    User.find({})
        .then((users) => {
            res.status(200).json(users);
            console.log(users);
        })
        .catch(error => res.status(400).json({ error }));
};

exports.deleteUser = (req, res, next) => {
    User.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(200).json({ message: 'User supprimé !' });
        })
        .catch(error => res.status(400).json({ error }));
};