
const handler = async (req, res) => {
    // Your hapi.js logic here
    res.status(200).send('Hello from my serverless function!');
  };
  
  module.exports = handler;