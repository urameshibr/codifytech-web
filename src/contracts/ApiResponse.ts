export interface ApiResponse extends Response {
    message?: string;
    data: null | Array<any> | object;
}