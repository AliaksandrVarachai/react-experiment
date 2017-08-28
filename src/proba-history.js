var appRoot = document.getElementById('app-root');

var page = document.getElementById('page');

var div = document.createElement('div');

var link1 = document.createElement('a');
var link2 = document.createElement('a');
var link3 = document.createElement('a');
link1.href = 'http://localhost:8080/proba1.html';
link2.href = window.location.href + '/2';
link3.href = window.location.href + '#3';
link1.onclick = navClick;
link2.onclick = navClick;
link3.onclick = navClick;
link1.appendChild(document.createTextNode('link #1'));
link2.appendChild(document.createTextNode('link #2'));
link3.appendChild(document.createTextNode('link #3'));

div.appendChild(document.createElement('br'));
div.appendChild(link1);
div.appendChild(document.createElement('br'));
div.appendChild(link2);
div.appendChild(document.createElement('br'));
div.appendChild(link3);

appRoot.appendChild(div);

document.getElementById('show-history').onclick = function(event) {
  console.log('history=', history);
  console.log('state=', history.state, 'title=', history.title, 'url=', history.url);
  console.log('current=', location.href);
};

function navClick(event) {
  event.preventDefault();
  var target = event.target;
  var state = {href: target.href};
  var title = 'title=' + target.href;
  var url = target.href;
  history.pushState(state, title, url); //if history added with pushState method - the page does not reload!!!
  page.innerHTML = JSON.stringify(state);
}

document.getElementById('next').onclick = function(event) {
  history.forward();
};

document.getElementById('prev').onclick = function(event) {
  history.back();
};

window.onpopstate = function(event) {
  console.log('popstate, envet=', event);
  //alert('popstate');
};

window.onhashchange = function(event) {
  console.log('hashchange, event=', event);
};





