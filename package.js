Package.describe({
  summary: "An expressive, cross platform JavaScript Class provider with a classical interface to prototypal inheritance. See https://github.com/ded/klass"
});

Package.on_use(function (api) {

	if(api.export) {
    	api.export('klass', ['client', 'server']);
  	}

  	api.add_files(['klass.js'], ['client', 'server']);
});
