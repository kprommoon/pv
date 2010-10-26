var urlToLoad = "users.json";
var urlToSave = "";

var jsonReader = new Ext.data.JsonReader({id: 'id'},[
                {name: 'firstname'},
                {name: 'lastname'},
                {name: 'prefix'},
                {name: 'email'},
                {name: 'status'}
])

var userStore = new Ext.data.Store({
            proxy: new Ext.data.HttpProxy({url: urlToLoad}),
            reader: jsonReader
        })

        userStore.load();

Ext.onReady(function() {
    /*!
     * As Table
     */
    var tableView = new Ext.grid.GridPanel({
        title: 'Real Data',
        columnLines: true,
        columns: [
            {header: "First Name", sortable: true, dataIndex: 'firstname'},
            {header: "Last Name", sortable: true, dataIndex: 'lastname'},
            {header: "Prefix", sortable: true, dataIndex: 'prefix'},
            {header: "Email", sortable: true, dataIndex: 'email'},
            {header: "Status", sortable: true, dataIndex: 'status'}
        ],
        store: userStore,
        height: 200
    });



    var formView = new Ext.form.FormPanel({
            reader: jsonReader,
            title: 'Form',
            frame: true,
            url: urlToLoad,
            labelWidth: 75, // label settings here cascade unless overridden
            bodyStyle:'padding:5px 5px 0',
            width: 350,
            defaults: {width: 230},
            defaultType: 'textfield',
            tbar: ['->',{
                text: 'Status',
                enableToggle: true,
                toggleHandler: function(item, pressed) {
                    Ext.Ajax.request({
                       url: urlToSave,
                       form: formView,
                       params: 'status=' + pressed
                    });
                }
            }],
            buttons: [{
                text: 'Submit',
                handler: function(item) {
                    this.getForm().submit({
                        url: urlToSave,
                        scope:this,
                        params:{cmd:'save'},
                        waitMsg:'Saving...'
                    });
                     formView.getForm().load({url: urlToLoad, method: 'get'});
                     tableView.load({url: urlToLoad, method: 'get'});
                }
            }],
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

        /*formView.on('actionfailed', function(form, action){
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
		});*/

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
            width: 500,
            layout:'fit',
            items: [tableView]
        },{
            region: 'center',
            items: [formView]
        }]
    });

    formView.getForm().load({url: urlToLoad, method: 'get'});
});
