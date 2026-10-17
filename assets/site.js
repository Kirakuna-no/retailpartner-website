
(function(){
  var b=document.getElementById('copy'),a=document.getElementById('addr');
  b.addEventListener('click',function(){
    function done(){b.textContent='Kopiert';setTimeout(function(){b.textContent='Kopier adresse'},1800)}
    try{
      navigator.clipboard.writeText(a.textContent).then(done,function(){
        var r=document.createRange();r.selectNodeContents(a);var s=getSelection();s.removeAllRanges();s.addRange(r);
      });
    }catch(e){
      var r=document.createRange();r.selectNodeContents(a);var s=getSelection();s.removeAllRanges();s.addRange(r);
    }
  });
})();

