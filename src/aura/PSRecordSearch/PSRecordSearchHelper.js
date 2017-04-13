({
    initSearchField: function(component) {
        console.log('initSearchField begin...');
    },
    executeSearch: function(component)
    {
        console.log('helper executeFilter started...');

        var sobject = component.get("v.sobject");
        var searchField = component.get("v.searchField");
        var searchValue = component.get("v.searchValue");

        var soql = new String();
        soql = "SELECT Id FROM " + sobject + " WHERE " + searchField + " = '" + searchValue + "'";
        console.log("SOQL=" + soql);

        var action = component.get("c.query");
        action.setParams({
            "queryStr": soql
        });
        console.log(JSON.stringify(action.getParams()));

        //Set up the callback
        var self = this;
        action.setCallback(this, function(a) {
            console.log('query callback!');
            console.log(JSON.stringify(a.getReturnValue()));
            var recs = a.getReturnValue();
            if (recs == null || recs.length == 0)
            {
                // fire a toast message to popup on screen for Success
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Warning!",
                    "message": "Search found no record.",
                    "duration": 1000,
                    "type": "warning"
                });
                toastEvent.fire();
            } 
            else if (recs.length > 1) {
                // fire a toast message to popup on screen for Success
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Warning!",
                    "message": "Search found multiple records.",
                    "duration": 1000,
                    "type": "warning"
                });
                toastEvent.fire();
            } else {
                console.log(recs[0]);
                component.set("v.rec", recs[0]);
            }
        });
        $A.enqueueAction(action);
    }
})