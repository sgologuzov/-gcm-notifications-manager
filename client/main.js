import { Template } from 'meteor/templating';

import './main.html';

Template.tokens.onCreated(function tokensOnCreated() {
  // counter starts at 0
  //this.counter = new ReactiveVar(0);
});

Template.tokens.helpers({
  /*counter() {
    return Template.instance().counter.get();
  },*/
});

Template.tokens.events({
  /*'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },*/
});

Template.total.helpers({
  tokensCount() {
    console.log(Tokens);
    return Tokens;
  },
});

