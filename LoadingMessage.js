Ext.onReady(function() {
  //fade the loading mask out
  setTimeout(function(){
    Ext.get('loading').remove();
    Ext.get('loading-mask').fadeOut({remove:true});
  }, 250);
});