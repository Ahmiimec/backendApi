import path from 'path';
const fs = require('fs');
require("dotenv").config({ path: path.resolve(__dirname, '../.env') });

const config = {
    port:process.env.PORT
  };
  
  export default config;
  