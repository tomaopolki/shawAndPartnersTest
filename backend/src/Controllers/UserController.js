const axios = require('axios');

module.exports = {
    async index(req, res){
        let since = req.query.since;
        
        const response = await axios.get(`https://api.github.com/users?since=${since}`);
        data = response.data;
        lastId = data[data.length - 1].id;
        res.json({
            data, lastId
        });
    },
    async show(req, res){
        let username = req.params.username;

        const response = await axios.get(`https://api.github.com/users/${username}`);
        data = response.data;
        id = data.id;
        login = data.login;
        url = data.url;
        created_at = data.created_at;

        res.json({
            id,
            login,
            url,
            created_at,
        });
    }
};