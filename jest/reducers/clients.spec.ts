import clientsReducer from "../../src/reducers/clients";
import { clientsSelector, clientNameSelector, clientIdSelector } from '../../src/reducers/clients';
import { CLIENTS, CLIENT_ID, CLIENT_NAME } from "../../src/constants/global";
import { RECEIVE_CLIENTS_DATA } from "../../src/constants/admin";
import { SET_CLIENT_ID, RECEIVE_CLIENT_NAME } from "../../src/constants/clients";

const initialState = {
    [CLIENTS]: [],
    [CLIENT_ID]: "",
    [CLIENT_NAME]: ""
};

describe("clients reducer", () => {
    test("should return the initial state", () => {
        expect(clientsReducer(undefined, {})).toEqual(initialState);
    });

    test("should handle RECEIVE_CLIENTS_DATA", () => {
        const clients = [
            {
                id: "1",
                firstName: "Ivan",
                lastName: "Ivanov",
                funds: 200,
                profit: 0
            },
            {
                id: "2",
                firstName: "Georgi",
                lastName: "Georgiev",
                funds: 1000,
                profit: 0
            }
        ];

        expect(
            clientsReducer(initialState, {
                type: RECEIVE_CLIENTS_DATA,
                payload: { clients }
            })
        ).toEqual({
            ...initialState,
            [CLIENTS]: clients
        });
    });

    test("should handle SET_CLIENT_ID", () => {
        const clientId = "1";

        expect(
            clientsReducer(initialState, {
                type: SET_CLIENT_ID,
                payload: { clientId }
            })
        ).toEqual({
            ...initialState,
            [CLIENT_ID]: clientId
        });
    });

    test("should handle RECEIVE_CLIENT_NAME", () => {
        const clientName = "Client Name";

        expect(
            clientsReducer(initialState, {
                type: RECEIVE_CLIENT_NAME,
                payload: { clientName }
            })
        ).toEqual({
            ...initialState,
            [CLIENT_NAME]: clientName
        });
    });
});

describe("clients selectors", () => {
    test("should select clients", () => {
        const clients = [
            {
                id: "1",
                firstName: "Ivan",
                lastName: "Ivanov",
                funds: 200,
                profit: 0
            },
            {
                id: "2",
                firstName: "Georgi",
                lastName: "Georgiev",
                funds: 1000,
                profit: 0
            }
        ];

        expect(
            clientsSelector({ clients: { ...initialState, [CLIENTS]: clients } })
        ).toEqual(clients);
    });

    test("should select clientName", () => {
        const clientName = "Client Name";

        expect(
            clientNameSelector({
                clients: { ...initialState, [CLIENT_NAME]: clientName }
            })
        ).toEqual(clientName);
    });

    test("should select clientId", () => {
        const clientId = "1";

        expect(
            clientIdSelector({
                clients: { ...initialState, [CLIENT_ID]: clientId }
            })
        ).toEqual(clientId);
    });
});
