const mongodb = require('mongodb')

const connectionString = 'mongodb+srv://todoAppUser:coci1moci@cluster0-1yl2d.mongodb.net/ComplexApp?retryWrites=true&w=majority'

mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology:true}, function(err, client) {
    module.exports = client.db()
    const app = require('./app')
    app.listen(3000)
})