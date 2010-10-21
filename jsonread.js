var urlToLoad = "users.json";

var jsonReader = new Ext.data.JsonReader({id: 'id'},[
                {name: 'firstname'},
                {name: 'lastname'},
                {name: 'prefix'},
                {name: 'email'}
])

var userStore = new Ext.data.Store({
            proxy: new Ext.data.HttpProxy({url: urlToLoad}),
            reader: jsonReader
        })

        userStore.load();

Ext.onReady(function() {
    /*!
     * As Text
     */
    var textView = new Ext.Panel({
        title: 'as text only',
        autoLoad: urlToLoad,
        height: 200
    });

    /*!
     * As Table
     */
    var tableView = new Ext.grid.GridPanel({
        title: 'as table',
        columnLines: true,
        columns: [
            {header: "First Name", sortable: true, dataIndex: 'firstname'},
            {header: "Last Name", sortable: true, dataIndex: 'lastname'},
            {header: "Prefix", sortable: true, dataIndex: 'prefix'},
            {header: "Email", sortable: true, dataIndex: 'email'},
        ],
        store: userStore,
        height: 200
    });

    /*!
     * As Tree
     */
    var treeView = new Ext.tree.TreePanel({
    title: 'as tree',
    width: 200,
    height: 250,
    userArrows: true,
    animate: true,
    autoScroll: true,
    dataUrl: urlToLoad,
    requestMethod: 'get',
    root: {
        nodeType: 'async',
        text: 'Root Node'
    },
    listeners: {
        render: function() {
            this.getRootNode().expand();
        }
    }
})

    var formView = new Ext.form.FormPanel({
            reader: jsonReader,
            frame: true,
            url: urlToLoad,
            labelWidth: 75, // label settings here cascade unless overridden
            bodyStyle:'padding:5px 5px 0',
            width: 350,
            defaults: {width: 230},
            defaultType: 'textfield',
            items: [{
                fieldLabel: 'First Name',
                name: 'firstname'
            },{
                fieldLabel: 'Last Name',
                name: 'lastname'
            },{
                fieldLabel: 'Prefix',
                name: 'prefix'
            },{
                fieldLabel: 'Email',
                name: 'email'
            }]
    })
/*
        formView.on('actioncomplete', function(form, action){
			Ext.Msg.alert('Form Submission', 'Data loaded successfully!');
		});

		formView.on('actionfailed', function(form, action){
			if (action.failureType == "connect") {
                    Ext.MessageBox.alert('fs.actionfailed error', 'Form load failed. Could not connect to server.');
                } else {
                    if (action.response.responseText != '') {
                        var result = Ext.decode(action.response.responseText);
                        if(result && result.msg) {
                            Ext.MessageBox.alert('fs.actionfailed error', 'Form load failed with error: ' + action.result.msg);
                        } else {
                            Ext.MessageBox.alert('fs.actionfailed error', 'Form load failed with unknown error (possibly missing the "success" field in the json). Action type='+action.type+', failure type='+action.failureType);
                          }
                    } else {
                        Ext.MessageBox.alert('fs.actionfailed error', 'Form load returned an empty string instead of json');
                      }
                  }
		});
*/
    /*!
     * Viewport
     */
    var viewport = new Ext.Viewport({
        layout: 'border',
        defaults: {
            autoScroll: true,
            style: 'overflow-x: hidden'
        },
        items: [{
            region: 'west',
            width: 300,
            layout:'vbox',
            layoutConfig: {
                align : 'stretch',
                pack  : 'start'
            },
            items: [
                textView,
                tableView,
                treeView
            ]
        },{
            region: 'center',
            title: 'form',
            items: [formView]
        }]
    });

    formView.getForm().load({url: urlToLoad, method: 'get'});
});
