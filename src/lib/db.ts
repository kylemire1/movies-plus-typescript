import firebase from './firebase';

export const db = firebase.firestore();

export const getMoviesByCategory = (category: string) =>
  db.collection('movies').where('type', '==', category).get();
export const getMovie = (id: string) => db.collection('movies').doc(id).get();
