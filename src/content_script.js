'use strict'
// import { DESCRIPIONS } from "./descriptions";

const editorArea = document.querySelector('#FieldDescription').closest('#editor_area');
console.log(editorArea);
const templateSelect = createTemplateSelect();
editorArea.insertBefore(templateSelect, editorArea.firstChild);

// async function getDescriptions() {
//   const src = chrome.runtime.getURL('src/descriptions.js');
//   const descriptionsSource = await import(src);

//   return descriptionsSource.DESCRIPIONS;
// }

function createTemplateSelect() {
  const parentDiv = document.createElement('div');
  const selectElm = document.createElement('select');
  // const descriptions = await getDescriptions();
  const DESCRIPIONS = [
    {
      name: '共通テンプレート',
      url: 'https://raw.githubusercontent.com/tessai9/event-description-template/main/common.md'
    },
    {
      name: 'コラボ用テンプレート',
      url: 'https://raw.githubusercontent.com/tessai9/event-description-template/main/collaboration.md'
    }
  ];
  
  DESCRIPIONS.forEach(description => {
    const option = document.createElement('option');
    option.setAttribute('value', description.url);
    option.innerHTML = description.name;
    selectElm.append(option);
  });

  parentDiv.append(selectElm);

  return parentDiv;
}
