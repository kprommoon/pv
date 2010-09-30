Ext.onReady(function(){
    /*!
     * Search Field
     */
    new Ext.app.SearchField({
	    width:240,
		store: this.searchStore,
		paramName: 'q',
        renderTo: 'search-field'
	});

    /*!
     * Dashboard
     */
    var dashboard = new Ext.ux.Portal({
        renderTo: 'dashboard',
        border: false,
        items:[{
            columnWidth:.5,
            style:'padding: 5px',
            items:[{
                title: 'Widget 1',
                height: 175
            },{
                title: 'Widget 2',
                height: 175
            },{
                title: 'Widget 3',
                height: 175
            }]
        },{
            columnWidth:.5,
            style:'padding: 5px',
            items:[{
                title: 'Widget 4',
                height: 175
            },{
                title: 'Widget 5',
                height: 175
            },{
                title: 'Widget 6',
                height: 175
              }]
        }]
    });

    /*!
     * Navigation (Overriding old jQuery Navigation)
     */
    var nav = new Ext.Panel({
        renderTo: 'navigation',
        tbar: [{
            xtype: 'buttongroup',
            title: 'Application',
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
            defaults: { iconCls: 'document' },
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
     * Project Bag
     */
/*    var projectBag = new Ext.tree.treePanel({
        renderTo: 'project-bag',
        animate: true,
        autoscroll: true,

    })*/

    /*!
     * Application Tab
     */
    var tabs = new Ext.ux.AppTab({
		resizeTabs: true, // turn on tab resizing
		enableTabScroll: true,
		slideDuration: .15,
        activeTab: 0,
		defaults: {
            closable: true
        },
		plugins: new Ext.ux.TabCloseMenu(),
        items: [{
            appTab: true,
            iconCls: 'sme-kit',
            closable: false,
            layout: 'fit',
            el: 'home'
        },{
            title: 'All Projects'
        },{
            title: 'Project 1',
            layout: 'border',
            items:[{
                region: 'west',
                collapsible: true,
                split: true,
                width: 200,
                el: 'project-bag',
                title: 'Project 1'
            },{
                region: 'center',
                el: 'project-summary'
            },{
                region: 'east',
                collapsible: true,
                split: true,
                width: 300,
                el: 'message-board',
                title: 'Message Board'
            }]
        }]
	});

    /*!
     * Viewport
     */
    var viewport = new Ext.Viewport({
        layout: 'fit',
        defaults: {
            autoScroll: true,
            style: 'overflow-x: hidden'
        },
        items: tabs
    });
});