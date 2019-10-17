
function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');


    btn.innerHTML = 'Click me and check the console';
    btn.onclick = onButtonClick;

    element.appendChild(btn);

    return element;
  }
  
  document.body.appendChild(component());

function getComponent(){
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(({default: _}) => {
        const element = document.createElement('div');

        element.innerHTML = _.join(['Hello', 'webpack'], ' ');

        return element;
    }).catch(error => 'An error occured while loading component')
}



function onButtonClick(){
    getComponent().then(component => {
        document.body.appendChild(component);
    })
}