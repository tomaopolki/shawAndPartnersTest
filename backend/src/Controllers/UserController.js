const axios = require('axios');

module.exports = {
    async index(req, res){
        let since = req.query.since;
        
        const response = await axios.get(`https://api.github.com/users?since=${since}`, {
            headers: {
              'Authorization': process.env.AUTH_TOKEN
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
              'Authorization': process.env.AUTH_TOKEN
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