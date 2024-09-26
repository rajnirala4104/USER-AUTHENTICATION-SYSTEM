export class ApiError extends Error {

    private statusCode: number;
    private data: any;
    private success: boolean;
    private errors: any[];

    constructor(
        statusCode: number,
        message = "something went wong",
        errors = [],
        stack = "",
    ) {
        super(message);
        this.statusCode = statusCode;
        this.errors = errors;
        this.stack = stack;
        this.data = null;
        this.success = false;

        if (stack) this.stack = stack;
        else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}