export interface columnDef {
    headerName: string;
    field: string;
    customComponent?: React.ComponentClass<any, any> | React.FunctionComponent<any>;
    customCallback?(): void;
}
