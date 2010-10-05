Ext.onReady(function(){
    var add_button = new Ext.Button({
        handler: addTab,
        text: 'Add a new Tab'
    })

    var tabs = new Ext.TabPanel({
	      activeTab: 0,
	      items: [{
		        title: 'Initial Tab',
		        items: add_button
		    }]
    })

    function addTab() {
	      tabs.add({
		        title: 'A tab',
		        autoLoad: 'buttongroup.htm'
	      }).show();
    }

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
})