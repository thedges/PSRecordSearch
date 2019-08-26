({
    doInit: function(component, event, helper) {
        //console.log("doInit called");
        helper.initSearchField(component);
    },
    searchEvents: function(component, event, helper) {
      //console.log(event.getParams().keyCode);
      if(event.getParams().keyCode == 13){
        console.log('Enter key pressed');
        helper.executeSearch(component);
      }
   }
})