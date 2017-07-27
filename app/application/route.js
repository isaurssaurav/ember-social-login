import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
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
      }).then(function(data){
        console.log('data ==>',data);
      })
    },
    signOut:function(){
      this.get('session').close();
    }
  }

});
