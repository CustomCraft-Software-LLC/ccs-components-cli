#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { Command } from 'commander';
import Handlebars from 'handlebars';
import { fileURLToPath } from 'url';  
import inquirer from 'inquirer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

const program = new Command();

program
  .name('ccs-components-cli')
  .description('Generate React components with MUI styling')
  .version('1.0.6');

program
  .command('generate')
  .description('Generate a new React component')
  .action(async () => {
    try {
      const { componentName } = await inquirer.prompt([
        {
          type: 'list',
          name: 'componentName',
          message: 'Select the component you want to generate:',
          choices: [
            'Hero',
            'CallToAction',
            'Navbar',
            'PricingCard',
            'Header',
            'Footer',
            'ContactInfo',
            'Sitemap',
            'Component'
          ],
        },
      ]);

      const templatePath = path.resolve(__dirname, '../templates', `${componentName}.js.hbs`);
      const templateContent = fs.readFileSync(templatePath, 'utf-8');

      const template = Handlebars.compile(templateContent);

      const output = template({
        name: componentName
      });

      const outputPath = path.resolve(__dirname, '../src', 'components', `${componentName}.js`);
      fs.writeFileSync(outputPath, output);

      console.log(`\n✅ Component "${componentName}" generated successfully!`);
    } catch (error) {
      console.error('❌ Failed to generate component:', error.message);
    }
  });

program.parse(process.argv);