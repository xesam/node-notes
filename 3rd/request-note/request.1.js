const request = require('request');
request({
    url: 'https://www.baidu.com',
    method: "GET",
    followRedirect: false,
    maxRedirects:0,
    headers: {
        "content-type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36"
    },
}, function (error, response, body) {
    console.log(response.statusCode)
    console.log(body)
})
