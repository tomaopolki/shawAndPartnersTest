const axios = require('axios');
const { authToken } = require('../Services/config');

module.exports = {
    async index(req, res){
        let since = req.query.since;
        
        const response = await axios.get(`https://api.github.com/users?since=${since}`, {
            headers: {
              'Authorization': authToken
            }
          } );
        
        data = response.data;
        firstId = data[0].id;
        
        link = response.headers.link;
        link = link.split(',');
        since = link[0].replace(/[^0-9]/g,'');
        
        res.json({
            data, since, firstId
        });
    },
    async show(req, res){
        let username = req.params.username;

        const response = await axios.get(`https://api.github.com/users/${username}`, {
            headers: {
              'Authorization': authToken
            }
          });
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