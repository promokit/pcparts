export interface AppConfigInterface {
    port: number;
    databaseURL: string | undefined;
    api: {
        prefix: string;
    };
}
