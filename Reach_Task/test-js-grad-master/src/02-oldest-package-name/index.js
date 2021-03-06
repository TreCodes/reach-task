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

 *  With the results from this request, inside "content", return
 *  the "name" of the package that has the oldest "date" value
 */

 const axios = require('axios');

module.exports = async function oldestPackageName() {
  // TODO
  const response = await axios.post(
    'http://ambush-api.inyourarea.co.uk/ambush/intercept',
    {
      url: 'https://api.npms.io/v2/search/suggestions?q=react',
      method: 'GET',
      return_payload: true,
    },
  );

  const packages = response.data.content;

  packages.sort((a, b) => {
    var date1 = new Date(a.package.date).getTime();
    var date2 = new Date(b.package.date).getTime();
    return date1 > date2 ? 1 : -1;
  });

  const name = packagesByDate[0].name;
  return name;
  
};
