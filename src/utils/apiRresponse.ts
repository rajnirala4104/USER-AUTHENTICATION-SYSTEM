export class ApiResponse {
    private statusCode: number;
    private data: any;
    private message: string;

    constructor(statusCode: number, data: any, message: string = "success") {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
    }
}