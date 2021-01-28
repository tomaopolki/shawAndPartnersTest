const axios = require('axios');

module.exports = {
    async index(req, res){
        let username = req.params.username;

        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        let keys = ['id', 'name', 'html_url'];

        repos = response.data.map(o => keys.map(k => o[k]));

        res.json({
            repos
        });
    }
};