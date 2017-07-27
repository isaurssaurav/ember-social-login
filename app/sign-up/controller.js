import Ember from 'ember';

export default Ember.Controller.extend({
  firebaseApp: Ember.inject.service(),

  email: 'ad',
  password:'',
  actions:{
    signUp() {
      let controller = this;
       const auth = this.get('firebaseApp').auth();
       auth.createUserWithEmailAndPassword(this.get('email'), this.get('password')).then(response =>{
         console.log(response);
         this.transitionToRoute('sign-in');
       })
    }
  }
});
