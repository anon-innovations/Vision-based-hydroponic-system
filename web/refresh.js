function reloadGraph() {
   var now = new Date();

   document.images['graph'].src = 'http://your_IP/Web/GraphData.json' + now.getTime();

   //Start new timer (1 min)
   timeoutID = setTimeout('reloadGraph()', 1000);
}
