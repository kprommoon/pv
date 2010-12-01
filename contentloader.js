var Content = (function() {
    // private variables
    var reference = {
        // declare all types and the associated javascript files here
        // note that these javascripts must return their components
        // example:
        // (function() {
        // var panel = new Ext.Panel({
        //  html: 'hello world'
        // });
        // return panel;
        // })()
        // </script>
        contact: 'addressbook.js',
        test: 'test.js'
    };

    return {
        // public methods
        load: function(container, contentType) {
            // displaying a throbber
            var throbber = {
                id: 'throbber',
                html: '<div class="loading-indicator">Loading...</div>'
            };
            if (container.getXType() == 'tabpanel')
                throbber.title = 'working...';
            container.add(throbber);
            container.doLayout();

            // calling javascript from server
            Ext.Ajax.request({
                url: reference[contentType],
                success: function(response, options) {
                    container.remove('throbber');
                    var item = eval(response.responseText);
                    if (container.getXType() == 'tabpanel')
                        item.title = 'done...';
                    container.add(item);
                    container.doLayout();
                },
                failure: function(response, options) {
                    container.remove('throbber');
                    var item = {
                        html: response.responseText
                    };
                    if (container.getXType() == 'tabpanel')
                        item.title = 'failed...';
                    container.add(item);
                    container.doLayout();
                }
            });
        },
        load: function(container, contentType, title) {
            // displaying a throbber
            var throbber = {
                id: 'throbber',
                title: title,
                html: '<div class="loading-indicator">Loading...</div>'
            };
            container.add(throbber);
            container.doLayout();

            // calling javascript from server
            Ext.Ajax.request({
                url: reference[contentType],
                success: function(response, options) {
                    container.remove('throbber');
                    var item = eval(response.responseText);
                    item.title = title;
                    container.add(item);
                    container.doLayout();
                },
                failure: function(response, options) {
                    container.remove('throbber');
                    var item = {
                        html: response.responseText
                    };
                    item.title = title;
                    container.add(item);
                    container.doLayout();
                }
            });
        }
    }
}());
