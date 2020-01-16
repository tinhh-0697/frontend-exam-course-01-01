import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyDk3jbSiz8agKmOfP3InuRALHiqU86MdpQ",
  authDomain: "fe-exam-course-01-01.firebaseapp.com",
  databaseURL: "https://fe-exam-course-01-01.firebaseio.com",
  projectId: "fe-exam-course-01-01",
  storageBucket: "fe-exam-course-01-01.appspot.com",
  messagingSenderId: "45152271471",
  appId: "1:45152271471:web:80fbece03fa07edee6619a"
};

app.initializeApp(config);
const auth = app.auth();
const database = app.database();

export const doSignInWithEmailAndPassword = (email, password) => auth.signInWithEmailAndPassword(email, password);
export const onAuthUserListener = () => auth.onAuthStateChanged(user => user);
export const doLogout = () => auth.signOut();
export const getArticles = () => database.ref('/articles').once('value').then(snapshot => snapshot.val());
export const addArticle = (article) => database.ref('/articles').push(article);
export const deleteArticle = (key) => database.ref(`/articles/${key}`).set({});
export const updateArticle = (articleObj) => database.ref(`/articles/${articleObj.key}`).update(articleObj.article);

export default auth;
