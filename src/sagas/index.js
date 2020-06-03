import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchContacts() {

  const json = yield fetch('http://localhost:3001/users')
    .then(response => response.json());

  yield put({ type: "CONTACTS", json: json.email || [{ error: json.message }] });
}
