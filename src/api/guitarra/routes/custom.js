module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/guitarras/:url',
            handler: 'guitarra.findOne'
        }
    ]
}
