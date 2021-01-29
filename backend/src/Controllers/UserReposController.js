const axios = require('axios');
const { authToken } = require('../Services/config');

module.exports = {
    async index(req, res){
        let username = req.params.username;

        const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
            headers: {
              'Authorization': authToken
            }
          });

        repos = response.data;

        res.json({
            repos
        });
    }
};