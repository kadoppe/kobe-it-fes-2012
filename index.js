(function() {

  var svgElm = document.getElementById("svg");

  var circleElm = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circleElm.setAttribute('r', 20);
  circleElm.setAttribute('cx', 200);
  circleElm.setAttribute('cy', 200);
  circleElm.setAttribute('fill', 'red');

  svgElm.appendChild(circleElm);

  circleElm.addEventListener('click', function() {
    circleElm.setAttribute('filter', 'url(#drop-shadow)');
  });

})();
