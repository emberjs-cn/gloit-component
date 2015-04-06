import Ember from 'ember';

export default Ember.Controller.extend({
  identification: null,
  password: null,

  supportedBrowers: [
    { name: 'Chrome', url: 'http://www.google.com/chrome', icon: '/assets/images/chrome.png' },
    { name: 'Firefox', url: 'http://www.mozilla.org/en-US/firefox/new/', icon: '/assets/images/firefox.png' },
    { name: 'Safari', url: 'http://www.apple.com/sg/safari/', icon: '/assets/images/safari.png' },
    { name: 'IE 10+', url: 'http://windows.microsoft.com/en-sg/internet-explorer/ie-10-worldwide-languages', icon: '/assets/images/ie.png' }
  ],

  actions: {
    authenticate: function() {
      window.alert('用户名：' + this.identification + '，密码：' + this.password);
    }
  }
});
