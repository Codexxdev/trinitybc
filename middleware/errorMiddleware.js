import ErrorHandler from './errorHandler'


export default (err, req, res, next) => {
    err.statusCode = err.statusCode || 200

    let error = { ...err }


    error.message = err.message

    // wrong mongoose Object error
    if (err.name === 'CastError') {
        const message = `Resource not found. Invalid ${err.path}`
        error = new ErrorHandler(message, 400)
    }

    // Handling mongoose validation error
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(value => value.message)
        error = new ErrorHandler(message, 400)
    }
    res.status(err.statusCode).json({
        success: false,
        error,
        message: error.message,
        stack: error.stack
    })
}