// ApiResponse utility Class used for effective api response generation.

class ApiResponse {
    constructor(
        statusCode,
        data,
        message = "Success",

    )
    {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400;

    }
};

export {ApiResponse};