const internal_server_error_handler = (error, req, res, next) => {

    console.log(error);

    return res.status(500).json({
        success: false,
        response: error,
        message: "Error al manejar la solicitud"
    })
}
export default internal_server_error_handler