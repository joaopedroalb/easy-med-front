export class ApiException extends Error{
    message = '';
    error = true
    constructor(message) {
        super()

        this.message = message
    }
}