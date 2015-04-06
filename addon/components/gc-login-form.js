import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['gc-login-form'],

  title: '用户登录',
  copyright: '&copy; 2014-2015',
  version: 'v0.0.0',

  registerable: false,

  // Default handler of sign in
  action: 'authenticate',

  titleHtmlSafe: function() {
    return this.get('title').htmlSafe();
  }.property('title'),

  copyrightHtmlSafe: function() {
    return this.get('copyright').htmlSafe();
  }.property('copyright'),

  didInsertElement: function() {
    Ember.$('input#identification').focus();
  },

  actions: {
    login: function() {
      this.sendAction('action');
    }
  }
});
