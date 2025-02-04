const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: 'FrlkBKCK#dyjSOVWT-YrI-3ijoyiOeVV-Si7n5-q2dmFjbURFjXg'
};
