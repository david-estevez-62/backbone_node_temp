var app = app || {};


$(function() {
  app.appView = new app.AppView();
  app.posts.reset(bootstrapPosts);
});