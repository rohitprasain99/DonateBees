
const responseInterceptor = (req, res, next) => {

    //get the original json
    const originalJson = res.json;

    //override origin response JSON
    res.json = function (body, message) {

        const formatter = {
            statusCode: res.statusCode,
            message,
            data: body
        }
        return originalJson.call(this, formatter)
    }

    next()

}

module.exports = responseInterceptor;
