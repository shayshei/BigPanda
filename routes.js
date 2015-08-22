/**
 * Created by shs on 8/22/15.
 */

var express = require('express');
var request = require('request');
var router = express.Router();

var GITHUB_API_CALL = 'https://status.github.com/api/';
var API_CALLS = ['status', 'last-message', 'messages'];

/**
 * Make an API call using the GitHub API
 * @param apiCall The API call the make, may be one out out API_CALLS
 * @param res the response to update with the result
 */
function makeGitHubApiCall(apiCall, res) {
    request(GITHUB_API_CALL + apiCall + ".json", function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.contentType("text/javascript");
            res.end(body);
        }
    });
}

// GitHub API call
router.get('/:api', function (req, res) {
    var apiCall = req.params.api.toLowerCase();
    if (API_CALLS.indexOf(apiCall) >= 0) {
        makeGitHubApiCall(apiCall, res);
    } else {
        res.status(404);
        res.end("Not a valid API call. Available: " + API_CALLS.join(", "));
    }
});

// Main page
router.get('/', function (req, res) {
    res.render("index");
});

module.exports = router;