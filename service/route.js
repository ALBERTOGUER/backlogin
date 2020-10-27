

export default (LOG, connection) => {

    LOG.post('/', (req, res) => {
        const {
            correo,
            contraseña
        } = req.body

        connection.query('insert into usuario (correo, contraseña)  values (?,?)', [correo, contraseña], (err, result) => {
            if (err) {
                res.json({
                    status: 'error',
                    message: err.message
                })
            } else {
                res.json({
                    status: 'ok',
                    result
                })
            }
        })
    })

}