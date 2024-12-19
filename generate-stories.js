import fs from 'fs-extra';
import path from 'path';

const componentsDir = path.join(process.cwd(), 'src', 'components');
const storiesDir = path.join(componentsDir, '__stories__');

const storyTemplate = (componentName) => `
import React from 'react';
import ${componentName} from '../${componentName}';

export default {
  title: 'Components/${componentName}',
  component: ${componentName},
};

export const Default = () => {
  return ( 
    <${componentName} />
  );
}`;

const generateStories = () => {
  if (!fs.existsSync(storiesDir)) fs.mkdirSync(storiesDir);

  const files = fs.readdirSync(componentsDir).filter((file) => file.endsWith('.js') && file !== '__stories__');

  files.forEach((file) => {
    const componentName = path.basename(file, '.js');
    const storyFilePath = path.join(storiesDir, `${componentName}.stories.js`);

    if (!fs.existsSync(storyFilePath)) {
      fs.writeFileSync(storyFilePath, storyTemplate(componentName));
      console.log(`Generated: ${storyFilePath}`);
    }
  });
};

generateStories();