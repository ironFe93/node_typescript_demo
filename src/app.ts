import Express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import './config/sequelize';

// Create Express server
const app = Express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get our API routes and set them
import api from './routes/api';
app.use('/api', api);

// Catch all other routes and return the index file. must come last.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {

    app.use((err: any, req: any, res: any, next: any) => {
        res.status(err.status || 500).send(err.toString());
    });

} else {
    // production error handler
    // no stacktraces leaked to user
    app.use((err: any, req: any, res: any, next: any) => {
        // LOG ERROR TO DB IN HERE
        //
        err.message = 'Error en el servidor';
        res.status(err.status || 500).send(err.toString());
    });
}

export default app;