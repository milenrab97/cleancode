export interface columnDef {
    headerName: string;
    field: string;
    customComponent?: React.ComponentClass<any, any> | React.FunctionComponent<any>;
    customCallback?(): void;
}

export interface Client {
    id: string;
    firstName: string;
    lastName: string;
    funds: number;
    profit: number;
}

