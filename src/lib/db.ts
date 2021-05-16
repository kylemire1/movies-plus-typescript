import firebase from './firebase';

export const db = firebase.firestore();

export const getMoviesByCategory = (category: string) =>
  db.collection('movies').where('type', '==', category).get();

export const getMovie = (
  id: string,
): Promise<
  firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>
> => {
  return db.collection('movies').doc(id).get();
};
