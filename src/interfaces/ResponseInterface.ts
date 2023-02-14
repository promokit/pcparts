export interface ResponseInterface {
    status: string;
    results?: number;
    data: {
        data: Array<object>;
    };
}
