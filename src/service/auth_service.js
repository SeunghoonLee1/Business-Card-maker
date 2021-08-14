import firebase from 'firebase';
import firebaseAPp from './firebase';
class AuthService{
  login(providerName){
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseAPp.auth().signInWithPopup(authProvider)
      .catch(console.error);
  }
}

export default AuthService;