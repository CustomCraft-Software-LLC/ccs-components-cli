import { Command } from 'commander';
import { nodePlop } from 'plop';
import path from 'path';

const program = new Command();

program
  .name('ccs-components-cli')
  .description('CLI tool for generating React components with MUI styling')
  .version('1.0.2', '-v, --version', 'Output the current version')
  .helpOption('-h, --help', 'Display help for command');

program
  .command('generate')
  .description('Generate a new React component with MUI styling')
  .action(async () => {
    const plopInstance = nodePlop(path.resolve('./plopfile.js'));
    const generator = plopInstance.getGenerator('Component');
    await generator.runActions({});
    console.log('Component generated successfully!');
  });

program.on('--help', () => {
  console.log('');
  console.log('Examples:');
  console.log('  $ ccs-components-cli generate');
  console.log('  $ ccs-components-cli -v');
  console.log('  $ ccs-components-cli --help');
});

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}