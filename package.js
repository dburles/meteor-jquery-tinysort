Package.describe({
  summary: "TinySort, a small and simple jQuery plugin"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files('jquery.tinysort.js', 'client');
});