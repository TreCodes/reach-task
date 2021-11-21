
/**
 * Make the following POST request with either axios or node-fetch:
POST url: http://ambush-api.inyourarea.co.uk/ambush/intercept
BODY: {
    "url": "https://api.npms.io/v2/search/suggestions?q=react",
    "method": "GET",
    "return_payload": true
}
 *******
The results should have this structure:
{
    "status": 200.0,
    "location": [
      ...
    ],
    "from": "CACHE",
    "content": [
      ...
    ]
}
 ******
 *  With the results from this request, inside "content", count
 *  the number of packages that have a MAJOR semver version 
 *  greater than 10.x.x
 */

const axios = require('axios');

module.exports = async function countMajorVersionsAbove10() {
    let count = 0;
    try {
        const response = await axios.post('http://ambush-api.inyourarea.co.uk/ambush/intercept', {
            "url": "https://api.npms.io/v2/search/suggestions?q=react",
            "method": "GET",
            "return_payload": true
        })

        const data = res.data;
        const content = data.content;

        for (let i = 0; i < content.length; i++) 
        {
            let version =  parseInt(content[i].package.version);
            if (version > 10) 
            {
                count ++
            }
        }
        return count;

    } catch(err) {
        console.error(err)
    }
};
