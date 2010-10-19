Ext.state.Manager.setProvider(new Ext.state.CookieProvider());

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
                        if (!Ext.get(record.data.name)) { // If this tab is not opened
                            var newtab = appTab.add({ // New tab
                                id: record.data.name,
                                title: record.data.name,
                                html: 'I was modified on ' + record.data.modified
                            })
                            appTab.setActiveTab(newtab); // And set it active
                        }
                        else appTab.setActiveTab(Ext.get(record.data.name).id); //else activate this tab
                        this.deselectRow(index); // deselect the grid
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
        stateEvents:['add', 'remove'],
        getState:function() {
            // declare an object to save state
            var state = {};
            var x = [];
            for (i=0; i<this.items.items.length; i++) {
                // copy desired config into state.items
                x[i] = {
                    title: this.items.items[i].title,
                    id: this.items.items[i].id,
                    html: this.items.items[i].body.dom.innerText
                };
            }
            state = {items: x};
            // return state
            return state;
        },
        applyState:function(state) {
            // add those status into appTab
            for (i=1; i<state.items.length; i++)
                this.add({
                    title: state.items[i].title,
                    id: state.items[i].id,
                    html: state.items[i].html
                });
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
