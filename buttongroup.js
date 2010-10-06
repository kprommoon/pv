Ext.onReady(function(){
    /*!
     * Navigation
     */
    var nav = new Ext.Panel({
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
    })

    /*!
     * Viewport
     */
    var viewport = new Ext.Viewport({
        layout: 'fit',
        items: nav
    });
});
