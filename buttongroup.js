Ext.onReady(function(){
    /*!
     * Navigation
     */
    var nav = new Ext.Panel({
        tbar: [{
            xtype: 'buttongroup',
            title: 'Application',
            defaults: {scale: 'large'},
            columns: 6,
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
            columns: 6,
            defaults: {
                iconCls: 'document',
                scale: 'large'
            },
            items: [{
                text: 'Quotation'
            },{
                text: 'Invoice'
            },{
                text: 'PO'
            },{
                text: 'Expense'
            },{
                text: 'Payment'
            },{
                text: 'SO'
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