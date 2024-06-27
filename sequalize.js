const sequelize = require('./config/connection');
const User = require('./models/Users');

async function start() {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database');

    // Your code here for using Sequelize (e.g., fetching data, updating records, etc.)
    

  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

 const getUserData = () =>{
    return User.findAll( )
}

module.exports = {getUserData}
start();