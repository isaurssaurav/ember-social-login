import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(), //this is used for facebook, twitter and other....


  beforeModel(){
    return this.get('session').fetch().catch(function() {});
  },
  actions:{
    signIn(){
      this.get('session').open('firebase',{
        provider:'password',
        email: this.controller.get('email'),
        password: this.controller.get('password')
      }).then(data =>{
        this.controllerFor('application').set('user', data);
      })
    }
  }
});
