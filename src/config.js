const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const DB_URL = process.env.DB_URL || `mongodb://localhost:27017/sdc`;
const DB_OPTIONS = 'minSize=30&poolSize=100';

module.exports = {
    port: 4000 || process.env.PORT,
    db: `${DB_URL}?${DB_OPTIONS}`
};
