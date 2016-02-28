const modulePath = "app/modules/{{camelCase name}}.js";
const SRC_PATH = 'src/';

module.exports = function (plop) {
	plop.addHelper("upperCase", function (text) {
		return text.toUpperCase();
	});

	plop.setGenerator("plugin", {
		description: "Create a new NodeJS Plugin",
		prompts: [{
			type: "input",
			name: "name",
			message: "What is your plugin name?"
		},
			{
				type: 'confirm',
				name: 'wantController',
				message: 'Do you want a Controller?'
			},
			{
				type: 'confirm',
				name: 'wantService',
				message: 'Do you want a Service?'
			},
			{
				type: 'confirm',
				name: 'wantRouter',
				message: 'Do you want a Router?'
			}
		],
		actions: function (answers) {
			var actions = [	//Index
				{
					type: "add",
					path: SRC_PATH + "/plugins/{{dashCase name}}/index.ts",
					templateFile: "plop-templates/nodejs-plugin-index.ts"
				}
			];

			if (answers.wantService) {
				actions.push({
					type: "add",
					path: SRC_PATH + "/plugins/{{dashCase name}}/{{dashCase name}}-service.ts",
					templateFile: "plop-templates/nodejs-plugin-service.ts"
				});
				actions.push({
					type: "add",
					path: SRC_PATH + "/plugins/{{dashCase name}}/{{dashCase name}}-service-spec.ts",
					templateFile: "plop-templates/nodejs-plugin-service-spec.ts"
				});
			}
			if (answers.wantRouter) {
				actions.push({
					type: "add",
					path: SRC_PATH + "/plugins/{{dashCase name}}/{{dashCase name}}-router.ts",
					templateFile: "plop-templates/nodejs-plugin-router.ts"
				});
			}
			if (answers.wantController) {
				actions.push({
					type: "add",
					path: SRC_PATH + "/plugins/{{dashCase name}}/{{dashCase name}}-controller.ts",
					templateFile: "plop-templates/nodejs-plugin-controller.ts"
				});
			}
			return actions;
		}
	});


	plop.setGenerator("controller", {
		description: "Create a new NodeJS Controller",
		prompts: [{
			type: "input",
			name: "name",
			message: "What is your controller name?"
		}],
		actions: [{
			type: "add",
			path: "src/controllers/{{camelCase name}}-controller.js",
			templateFile: "plop-templates/nodejs-controller.js"
		}, {
			type: "add",
			path: "test/specs/controllers/{{camelCase name}}-controller-spec.js",
			templateFile: "plop-templates/nodejs-controller-spec.js"
		}]
	});


	plop.setGenerator("service", {
		description: "Create a new NodeJS Service",
		prompts: [{
			type: "input",
			name: "name",
			message: "What is your service name?"
		}],
		actions: [{
			type: "add",
			path: "src/services/{{camelCase name}}-service.js",
			templateFile: "plop-templates/nodejs-service.js"
		}, {
			type: "add",
			path: "test/specs/services/{{camelCase name}}-service-spec.js",
			templateFile: "plop-templates/nodejs-service-spec.js"
		}]
	});

	plop.setGenerator("model", {
		actions: [
			{
				type: "add",
				path: "src/modules/{{camelCase name}}.model.js",
				templateFile: "plop-templates/model.js"
			}, {
				type: "add",
				path: "test/{{camelCase name}}.model.tests.js",
				templateFile: "plop-templates/model.tests.js"
			},
			{
				type: "modify",
				path: modulePath,
				pattern: /(\/\/ IMPORT MODULE FILES)/g,
				template: "$1\nimport Model from \"./{{camelCase name}}.model\";"
			}, {
				type: "modify",
				path: modulePath,
				pattern: /(const namespace = "\w+";)/g,
				template: "$1\n\nModel = Model.extend( { namespace: namespace } );"
			}
		]

	});

};
