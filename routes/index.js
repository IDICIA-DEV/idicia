var keystone = require('keystone'),
    middleware = require('./middleware'),
    importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initErrorHandlers);
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Handle 404 errors
keystone.set('404', function(req, res, next) {
  res.notfound();
});

// Handle other errors
keystone.set('500', function(err, req, res, next) {
  var title, message;
  if (err instanceof Error) {
    message = err.message;
    err = err.stack;
  }
  res.err(err, title, message);
});

// Load Routes
var routes = {
  views: importRoutes('./views'),
  api: importRoutes('./api'),
};

// Bind Routes
exports = module.exports = function(app) {
  app.get('/api/post/list', keystone.middleware.api, routes.api.posts.list);
  app.all('/api/post/create', keystone.middleware.api, routes.api.posts.create);
  app.get('/api/post/:id', keystone.middleware.api, routes.api.posts.get);
  app.all('/api/post/:id/update', keystone.middleware.api, routes.api.posts.update);
  app.get('/api/post/:id/remove', keystone.middleware.api, routes.api.posts.remove);

  // Catch all other rotues and go to index for now
  app.get('*', routes.views.index);
  // app.get('/blog/:category?', routes.views.blog);
  // app.get('/blog/post/:post', routes.views.post);
  // app.get('/gallery', routes.views.gallery);
  // app.all('/contact', routes.views.contact);
}
