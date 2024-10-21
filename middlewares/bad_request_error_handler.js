const bad_request_error_handler = (error, req, res, next) => {
    if (error.type === 'entity.parse.failed') {
        
        console.log(error);

        return res.status(400).json({
            success: false,
            response: error,
            message: "Solicitud incorrecta, se aconseja verificar la sintaxis en el formato, los parametro obligatorios y los valores del objeto o array de objetos - Bad Request"
        });
    }
    next(error);
};

export default bad_request_error_handler;