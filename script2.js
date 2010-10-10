Ext.onReady(function(){
    var viewport = new Ext.Viewport({
        layout: 'fit',
        defaults: {
            autoScroll: true,
            style: 'overflow-x: hidden'
        },
        items: [{
            xtype: 'tabpanel',
            activeTab: 0,
            items: [{
                title: 'Dashboard',
                tbar: [{
                    text: 'Company Name'
                },'-',
                new Ext.app.SearchField({
               	    width:240,
            		store: this.searchStore,
            		paramName: 'q',
                }),'-',{
                    text: 'FirstName LastName'
                },'-',{
                    text: 'Preference'
                },'-',{
                    text: 'Logout'
                }],
                items: [{
                    tbar: [{
                        xtype: 'buttongroup',
                        title: 'Application',
                        columns: 3,
                        defaults: {
                    		height:30,
                    		minWidth: 80,
                    		ctCls: 'main-menu-button'
                	    },
                        items: [{
                            text: 'Project',
                            iconCls: 'project'
                        },{
                            text: 'Timesheet',
                            iconCls: 'timesheet'
                        },{
                            text: 'Data',
                            iconCls: 'data'
                        },{
                            text: 'HR',
                            iconCls: 'hr'
                        },{
                            text: 'After Sale',
                            iconCls: 'after-sale'
                        },{
                            text: 'Setting',
                            iconCls: 'setting'
                        }]
                    },{
                        xtype: 'buttongroup',
                        title: 'Document',
                        columns: 4,
                        defaults: {
                    		height:30,
                            iconCls: 'document',
                    		minWidth: 80,
                    		ctCls: 'main-menu-button'
                	    },
                        items: [{
                            text: 'Quotation'
                        },{
                            text: 'Invoice'
                        },{
                            text: 'Job'
                        },{
                            text: 'PO'
                        },{
                            text: 'Expense'
                        },{
                            text: 'Payment'
                        },{
                            text: 'Project'
                        },{
                            text: 'Files'
                        }]
                    }]
                }]
            }]
        }]
    });

})