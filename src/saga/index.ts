import { all } from "redux-saga/effects";
import { exchangeSaga } from "./exchange";

export default function* rootSaga() {
    yield all([exchangeSaga()]);
}
