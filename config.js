var currentEnv = process.env.NODE_ENV || 'local';

var config = {};

// ENV set up

config.env = {
    production: false,
    local: false
};

config.env[currentEnv] = true;

config.firebase = {
  apiKey: "AIzaSyBDugxOr0kCfZ6Vxn4JQomt4uB-0W1SE88",
  authDomain: "carneasada-f0617.firebaseapp.com"
}

// Set Values
if(currentEnv === 'production'){

}

if(currentEnv === 'local'){

}

module.exports = config;
