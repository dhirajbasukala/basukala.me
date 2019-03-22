import { put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import urls from '../config/urls';

function* helloWorld(action) {
  yield console.log("Howdy ! ");
}

function fetchMoviesApi(action){
  return fetch(urls.omdb).then(response=>response.json())
}

function* fetchMovies(action) {
  console.log(action);
  yield console.log("Hello Mate !!! ");
  yield put({type: "FETCH_START"})
  const response = yield call(fetchMoviesApi)
  if(!response.error){
    yield put({type: "FETCH_MOVIES_SUCCEEDED", response })
  }
  console.log(response);
  yield put({type: "FETCH_END"})
}

function fetchGistApi(){
  return fetch("https://api.github.com/users/dhirajbasukala/gists").then(response => response.json());
}
function* fetchGist() {
  yield put({type: "FETCH_START"})
  const response = yield call(fetchGistApi)
  if(!response.error){
    yield put({type: "FETCH_GISTS_SUCCEEDED", gists: response })
  }
  yield put({type: "FETCH_END"})
}

function* rootSaga() {
  yield takeEvery('HELLO_WORLD', helloWorld);
  yield takeEvery('FETCH_MOVIES', fetchMovies);
  yield takeEvery('FETCH_GIST', fetchGist);

}

export default rootSaga;
