class ApiError extends Error {
    constructor(statusCode, message,errors=[],stack="") {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.errors = errors;
        this.stack = stack;
        this.data=null;
        this.success=false;
    }
}

export default ApiError;

//Error is a class that extends the Error class
//Error class is a built-in class in JavaScript
//Error class is used to create custom errors

//statusCode is a property of the ApiError class
//statusCode is a property of the Error class

//message is a property of the ApiError class
//message is a property of the Error class

//super() is a method of the ApiError class
//super() is a method of the Error class

//new ApiError(400, "Bad Request") is a way to create a new instance of the ApiError class