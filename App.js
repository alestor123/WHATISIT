var axios = require('axios');
module.exports = async name => {
if(!name) throw Error('Name Not Found')
var data = await axios.get('http://registry.npmjs.org/'+name)
return data.data.description
}
