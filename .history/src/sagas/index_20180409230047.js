import { put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import urls from '../config/urls';

function* helloWorld(action) {
  console.log("Howdy ! ");
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

function fetchGistApi(action){
  return fetch("https://gist.github.com/dhirajbasukala/08850825e5c9483112654150fe5c31f0.js")

function* fetchGist(action) {
  console.log(action);
  yield put({type: "FETCH_START"})
  const response = yield call(fetchGistApi)
  console.log(response);
  if(!response.error){
    yield put({type: "FETCH_MOVIES_SUCCEEDED", response })
  }
  console.log(response);
  yield put({type: "FETCH_END"})
}

function* rootSaga() {
  yield takeEvery('HELLO_WORLD', helloWorld);
  yield takeEvery('FETCH_MOVIES', fetchMovies);
  yield takeEvery('FETCH_GIST', fetchGist);

}

export default rootSaga;
