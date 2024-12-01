import path from 'path';

export default function (plop) {
  plop.setGenerator('Component', {
    description: 'Generate a new React Component with MUI styling',
    prompts: [
      {
        type: 'list',
        name: 'name',
        message: 'Select the component you want to generate:',
        choices: [
          'Hero',
          'CallToAction',
          'Navbar',
          'Header',
          'Custom',
        ],
      },
    ],
    actions: (data) => {
      const componentName = data.name;
      let templateComponent;

      if (componentName === 'Custom') {
        templateComponent = 'Component.js.hbs';
      } else {
        templateComponent = `${componentName}.js.hbs`;
      }

      return [
        {
          type: 'add',
          path: `src/pages/{{pascalCase name}}Component.js`,
          templateComponent: path.resolve(`templates/${templateComponent}`),
        },
      ];
    },
  });
}