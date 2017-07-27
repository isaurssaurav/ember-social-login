import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(), //this is used for facebook, twitter and other....


  beforeModel(){
    return this.get('session').fetch().catch(function() {});
  },
  model(){
    console.log(this.get('session').get('isAuthenticated'));
    console.log(this.get('session'));
  },
  actions:{
    signIn:function(){
      this.get('session').open('firebase', {
        provider: 'facebook',
         settings: {
           scope: 'public_profile',
         }
      }).then(data => {
        this.controller.set('user',data);
      })
    },
    signOut:function(){
      this.get('session').close();
    },
    signInFire:function(){
      this.transitionTo('sign-in');
    },
    signUpFire:function(){
      this.transitionTo('sign-up');
    }
  }

});
