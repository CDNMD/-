const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: '4WEkmL6C#z76yJPGAk2yARC6eO27v0uMWli1LPEymK5GJNEPyW0E'
};
