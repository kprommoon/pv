Ext.onReady(function(){
    /*!
     * Recent Projects
     */
    var recentProjects = new Ext.grid.GridPanel({
        columns: [
            {header: "Project Name", sortable: true},
            {header: "Last Modified", sortable: true}
        ],
        store: new Ext.data.Store({
            data: [
                [
                    "Demo Project",
                    "10-10-2010"
                ],[
                    "Another Project",
                    "01-01-2010"
                ]
            ],
            reader: new Ext.data.ArrayReader({id: 'id'},[
                'name',
                {
                    name: 'modified',
                    type: 'date',
                }
            ])
        }),
        selModel: new Ext.grid.RowSelectionModel({
            singleSelect: true,
            listeners: {
                rowselect: {
                    fn: function(sm,index,record) {
                        var newtab = appTab.add({
                            title: record.data.name,
                            html: 'I was modified on ' + record.data.modified
                        })
                        appTab.setActiveTab(newtab);
                    }
                }
            }
        })
    });

    /*!
     * Dashboard
     */
    var dashboard = new Ext.ux.Portal({
        border: false,
        style: 'padding: 5px 0',
        defaults: {style: 'padding: 0 2px'},
        items: [{
            columnWidth:.5,
            items:[{
                title: 'Recent Projects',
                tbar: ['Click on a project to view its content.'],
                height: 175,
                layout: 'fit',
                items: [recentProjects]
            }]
        },{
            columnWidth:.5,
            items:[{
                title: 'Widget 2',
                autoLoad: 'dd.htm',
                height: 175
            }]
        }]
    });

    /*!
     * Navigation
     */
    var appNavigation = new Ext.ButtonGroup({
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
    });

    var docNavigation = new Ext.ButtonGroup({
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
    });

    /*!
     * Application Tab
     */
    var appTab = new Ext.TabPanel({
        activeTab: 0,
    	plain:true,
        id: 'application-tab',
        defaults: {
            closable: true
        },
        items: [{
            id: 'home',
            closable: false,
            title: 'Home',
            iconCls: 'home',
            tbar: ['<b>Company Name</b>','-',
            new Ext.app.SearchField({
                width:240,
                store: this.searchStore,
                paramName: 'q',
            }),'->','<b>FirstName LastName</b>','-',
            {
                text: 'Preference',
                iconCls: 'preference'
            },'-',{
                text: 'Logout',
                iconCls: 'logout'
            }],
            layout: 'border',
            items: [{
                region: 'north',
                tbar: [appNavigation, docNavigation]
            },{
                region: 'center',
                layout: 'fit',
                items: [dashboard]
            }]
        }],
        plugins: new Ext.ux.TabCloseMenu()
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
        items: [appTab]
    });
})
