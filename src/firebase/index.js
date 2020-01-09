
// export const todosRef = databaseRef.child("users");
// export const articlesRef = databaseRef.child("articles");
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
// export default { firebase };

// class Firebase {
//   constructor() {
//     app.initializeApp(config);

//     /* Firebase APIs */

//     this.auth = app.auth();
//     this.db = app.database();
//   }

//   // *** Auth API ***
//   doSignInWithEmailAndPassword = (email, password) =>
//     this.auth.signInWithEmailAndPassword(email, password);

//   doSignOut = () => this.auth.signOut();

//   // *** Merge Auth and DB User API *** //

//   onAuthUserListener = (next, fallback) =>
//     this.auth.onAuthStateChanged(authUser => {
//       if (authUser) {
//         // this.user(authUser.uid)
//         //   .once('value')
//         //   .then(snapshot => {
//         //     const dbUser = snapshot.val();

//         //     // default empty roles
//         //     if (!dbUser.roles) {
//         //       dbUser.roles = {};
//         //     }

//         //     // merge auth and db user
//         //     authUser = {
//         //       uid: authUser.uid,
//         //       email: authUser.email,
//         //       emailVerified: authUser.emailVerified,
//         //       providerData: authUser.providerData,
//         //       ...dbUser,
//         //     };

//         //     next(authUser);
//         //   });
//       } else {
//         fallback();
//       }
//     });

//   // *** User API ***

//   user = uid => this.db.ref(`users/${uid}`);

//   users = () => this.db.ref('users');

//   // *** Message API ***

//   message = uid => this.db.ref(`messages/${uid}`);

//   messages = () => this.db.ref('messages');
// }

// export default Firebase;
