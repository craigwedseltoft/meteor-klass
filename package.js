Package.describe({
  summary: "An expressive, cross platform JavaScript Class provider with a classical interface to prototypal inheritance. See https://github.com/ded/klass"
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server'];
  api.add_files('lib/klass/klass.js', where);
});