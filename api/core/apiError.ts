export class ApiError {
    errorMessage: string
    statusCode?: number
    innerError?: Error | any
    constructor(msg: string, status?: number, innerError?: Error | any) {
        this.errorMessage = msg
        this.statusCode = status
        this.innerError = innerError
    }
}
