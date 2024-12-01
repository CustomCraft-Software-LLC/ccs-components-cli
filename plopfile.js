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
      let templateFile;

      if (componentName === 'Custom') {
        templateFile = 'Component.js.hbs';
      } else {
        templateFile = `${componentName}.js.hbs`;
      }

      return [
        {
          type: 'add',
          path: `src/components/{{pascalCase name}}.js`,
          templateFile: path.resolve(`templates/${templateFile}`),
        },
      ];
    },
  });
}