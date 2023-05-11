export interface Endpoint {
    method: string;

    uri: string;

    params?: {
        params?: object;

        data?: object;

        [key: string]: any;
    };
}