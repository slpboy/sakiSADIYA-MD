const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SADIYA-MD=GVFGRbqK#M3nDVAoZ76xBhRgOFvzyXXpn2DLcR-0Xy7mYkGvrp6s", //Put Session-id Here
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME || "slpboy", //Put Your Gitub Username
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN || "tL4BUyKjuW1V8DMofSGZw58iOeCCWI1GvFyg", //Put Your Github Auth Token
DATABASE_REPO_NAME: process.env.DATABASE_REPO_NAME || "SADIYA-MD-DATABASE", //Bot Database Repo Name
SESSION_NAME: process.env.SESSION_NAME || "session"
};
