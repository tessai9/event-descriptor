// テンプレート内容の取得
export async function getTemplateRaws(url) {
  const response = await fetch(url);
  return response;
}
