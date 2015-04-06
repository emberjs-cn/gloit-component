import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('gc-login-form');

test('has default title "用户登录"', function(assert) {
    var component  = this.subject(),
        $component = this.render();

    assert.equal(component.title, '用户登录');
});

//test('has an input which has a label named "用户名/邮箱："', function(assert) {
    //form = this.subject();
    //this.append();
    //assert.equal(form.$('label[for="identification"]').text(), '用户名/邮箱：');
//});
