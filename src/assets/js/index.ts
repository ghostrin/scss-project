export default (function(){
  let tid;
  function refreshRem():void {
    let scale = 1 / devicePixelRatio;
    document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';
  }
  refreshRem();
  window.addEventListener('resize', function() {
    clearTimeout(tid);
    tid = setTimeout(function () {
      refreshRem();
    }, 300)
  })
})()