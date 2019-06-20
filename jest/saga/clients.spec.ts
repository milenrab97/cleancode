import {
    fetchClientsData,
    requestClientsDataWatcher,
    deleteClientWatcher,
    deleteClientAsync,
    addClientWatcher,
    addClientAsync,
    clientsSaga
} from './../../src/saga/clients';
import { receiveClientsData, requestClientsData, deleteClient, addClient } from './../../src/actions/admin';
import { expectSaga, testSaga } from "redux-saga-test-plan";
import clientsReducer from "../../src/reducers/clients";
import { call } from "redux-saga/effects";

describe("Clients saga", () => {
    test("should call requestClientsDataWorker with success", () => {
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

        return expectSaga(requestClientsDataWatcher)
            .withReducer(clientsReducer as any)
            .provide([[call(fetchClientsData), { data: clients }]])
            .put(receiveClientsData({ clients }))
            .dispatch(requestClientsData())
            .silentRun();
    });

    test("should call deleteClientWorker with success", () => {
        const clientId = "2";

        return expectSaga(deleteClientWatcher)
            .provide([[call(deleteClientAsync, clientId), true]])
            .put(requestClientsData())
            .dispatch(deleteClient({ clientId }))
            .silentRun();
    });

    test("should call addClientWorker with success", () => {
        const clientToAdd = {
            firstName: "Client",
            lastName: "Name",
            funds: 50
        };

        return expectSaga(addClientWatcher)
            .provide([[call(addClientAsync, clientToAdd), true]])
            .put(requestClientsData())
            .dispatch(addClient(clientToAdd))
            .silentRun();
    });

    test("should watch all actions", () => {
        testSaga(clientsSaga)
            .next()
            .all([
                call(requestClientsDataWatcher),
                call(deleteClientWatcher),
                call(addClientWatcher),
            ])
            .finish()
            .isDone();
    });
});
