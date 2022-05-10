const bodyParser = require('body-parser')
const members = require('./membersRoute.js')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(members)
    app.get('/', (req, res) => res
    .status(200)
    .send (
        {
            message: 'Hello World'
        }
        ))
        
      
}