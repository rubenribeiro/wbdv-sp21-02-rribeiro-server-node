module.exports = (app) => {
    // Anything related to http should go to the controller.
    const add = (req, res) => {
        const a = parseInt(req.params['paramA']);
        const b = parseInt(req.params['paramB']);
        res.send(`${a + b}`);
    };

    const subtract = (req, res) => {
        const a = parseInt(req.query['a']);
        const b = parseInt(req.query['b']);
        const c = a - b;
        res.send(c + ''); // lazy way of casting a Int to string
    };

    //http://localhost:4000/subtract?a=9&b=6
    app.get('/subtract', subtract);

    //http://localhost:4000/add/3/4
    app.get('/add/:paramA/:paramB', add);

    app.get('/can/be/anything', (req, res) => {
        res.send('Hello World!');
    })
}