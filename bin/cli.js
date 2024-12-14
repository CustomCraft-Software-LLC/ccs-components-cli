#!/usr/bin/env node

import { Command } from 'commander';  // Importing commander
import path from 'path';              // Path module for file resolution
import { fileURLToPath } from 'url';  // To handle __dirname in ES modules

// Get the current directory of the script
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const program = new Command();

program
  .name('ccs-components-cli')
  .description('Generate React components with MUI styling')
  .version('1.0.3');

// Command to generate a component
program
  .command('generate')
  .description('Generate a new React component')
  .action(async () => {
    try {
      // Dynamically import Plop
      const plopModule = await import('plop'); // Correct dynamic import
      const plop = plopModule.plop; // Access plop function directly

      // Initialize Plop with the plopfile.js location
      const plopInstance = plop(path.join(__dirname, '../plopfile.js'));
      const generator = plopInstance.getGenerator('Component');
      
      // Run the generator without the need for a component name
      const results = await generator.runActions({});
      
      console.log('\n✅ Component generated successfully!\n');
      results.changes.forEach((change) => console.log(`Added: ${change.path}`));
      results.failures.forEach((failure) => console.error(`Error: ${failure.error || failure.message}`));
    } catch (error) {
      console.error('❌ Failed to generate component:', error.message);
    }
  });

// Parse the command-line arguments
if (!process.argv.slice(2).length) {
  program.help();
}

program.parse(process.argv);