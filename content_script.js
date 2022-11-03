'use strict'

// イベント説明テンプレート
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

const fieldDescription = document.querySelector('#FieldDescription');
const editorArea = fieldDescription.closest('#editor_area');
const templateSelect = createTemplateSelect();
editorArea.insertBefore(templateSelect, editorArea.firstChild);

// イベントテンプレートのselectタグ生成
function createTemplateSelect() {
  const parentDiv = document.createElement('div');
  parentDiv.classList.add('event-descriptor');
  const selectElm = document.createElement('select');
  const applyButtonElm = document.createElement('button');
  applyButtonElm.classList.add('event-descriptor-apply-button');
  applyButtonElm.innerHTML = "set description";

  // ボタンを押したら説明文をセットする
  applyButtonElm.addEventListener('click', async () => {
    const templateUrl = selectElm.value;
    await fetch(templateUrl)
    .then(data => { return data.text(); })
    .then(description => {
      fieldDescription.querySelector('textarea').value = description;
    });
  });

  DESCRIPIONS.forEach(description => {
    const option = document.createElement('option');
    option.setAttribute('value', description.url);
    option.innerHTML = description.name;
    selectElm.append(option);
  });

  parentDiv.append(selectElm);
  parentDiv.append(applyButtonElm);

  return parentDiv;
}
