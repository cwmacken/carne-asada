var currentEnv = process.env.NODE_ENV || 'local';

var config = {};

// ENV set up

config.env = {
    production: false,
    local: false
};

config.env[currentEnv] = true;

// TODO : pull into app.js


// Set Values

if(currentEnv === 'production'){

}

if(currentEnv === 'local'){

}

module.exports = config;
