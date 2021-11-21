/**
 * Make the following POST request with either axios or node-fetch:

POST url: http://ambush-api.inyourarea.co.uk/ambush/intercept
BODY: {
    "url": "https://api.npms.io/v2/search/suggestions?q=react",
    "method": "GET",
    "return_payload": true
}


a

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
  const response = await axios({
                    method: 'POST',
                    data: {
                      "url": "https://api.npms.io/v2/search/suggestions?q=react",
                      "method": "GET",
                      "return_payload": true
                    },
                    "url": 'http://ambush-api.inyourarea.co.uk/ambush/intercept',
                  });

    const data = res.data;
    const content = data.content;
    const packages = content.map((c) => c.package);
    const versions = packages.map((p) => p.version);
  
    const count = versions.reduce((sum, version) => {
      const ver = version.split('.');
      const majorVer = ver[0];
      if (+majorVer > 10) {
        return sum + 1;
      }
      return sum;
    }, 0);

    return count;
};
