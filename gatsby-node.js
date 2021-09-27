const path = require('path');
//const resume = require('./src/data/resume.json');

const SKILLS_PATH = './src/assets/skills/';

// exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
//   resume.skills.forEach((skill) => {
//     const { title, logo } = skill;

//     const { name, ext } = path.parse(logo);
//     const absolutePath = path.resolve(__dirname, SKILLS_PATH, logo);

//     const data = {
//       name,
//       ext,
//       absolutePath,
//       extension: ext.substring(1),
//     };

//     const imageNode = {
//       ...data,
//       id: createNodeId(`skill-image-${name}`),
//       internal: {
//         type: 'SkillImage',
//         contentDigest: createContentDigest(data),
//       },
//     };

//     actions.createNode(imageNode);

//     const node = {
//       title,
//       logo,
//       logo: imageNode,
//       id: createNodeId(`skill-${title}`),
//       internal: {
//         type: 'SkillList',
//         contentDigest: createContentDigest(skill),
//       },
//     };

//     actions.createNode(node);
//   });
// };
