const axios = require('axios');

module.exports = {
    async index(req, res){
        let username = req.params.username;

        const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
            headers: {
              'Authorization': process.env.AUTH_TOKEN
            }
          });

        repos = response.data;

        res.json({
            repos
        });
    }
};