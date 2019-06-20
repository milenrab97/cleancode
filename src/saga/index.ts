import { all } from "redux-saga/effects";
import { exchangeSaga } from "./exchange";
import { clientsSaga } from "./clients";

export default function* rootSaga() {
    yield all([clientsSaga(), exchangeSaga()]);
}
