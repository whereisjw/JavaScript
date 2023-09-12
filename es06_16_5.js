/* async */

function getHtml() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("HTML");
    }, 1000);
  });
}
function getCSS() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("CSS");
    }, 1000);
  });
}
function getJS() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("JS");
    }, 1000);
  });
}
async function getResult() {
  const html = await getHtml();
  const css = await getCSS();
  const js = await getJS();

  return [html, css, js];
}

getResult().then((result) => {
  console.log(result);
});

/* getHtml().then((html) => {
  getCSS().then((css) => {
    getJS().then((js) => {
      console.log([html, css, js]);
    });
  });
}); */
