import app from './server/app';
import config from './config/config'
// listen on port config.port
app.listen(config.port, () => {
    console.log("Server started successfuly on Port : ", config.port)
});

