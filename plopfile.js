module.exports = function(plop) {

  plop.setGenerator('test', {
    description: 'this is a test',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      validate: function(value) {
        if ((/.+/).test(value)) {
          return true;
        }
        return 'name is required';
      }
    }],
    actions: [{
      type: 'add',
      path: 'folder/{{dashCase name}}.txt',
      templateFile: 'templates/temp.txt'
    }]
  });



  // TODO: plugin
  plop.setGenerator('plugin', {
    description: 'A simple NodeJS plugin.',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Plugin name?',
      validate: function(value) {
        if ((/.+/).test(value)) {
          return true;
        }
        return 'Name is required';
      }
    }, {
      type: 'confirm',
      name: 'wantRoutes',
      message: 'Do you want routes?'
    }],
    actions: function(data) {
      var actions = [{
        type: 'add',
        path: 'folder/{{dashCase name}}.txt',
        templateFile: 'plop-templates/temp.txt'
      }];

      if (data.wantRoutes) {
        actions.push({
          type: 'add',
          path: 'folder/{{dashCase name}}.txt',
          templateFile: 'plop-templates/tacos.txt'
        });
      }
      return actions;
    }
  });

};
