/*!
 * Ext JS Library 3.3.0
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
Ext.onReady(function(){

    function handleActivate(tab){
        //alert(tab.title + ' was activated.');
    }
	
    // Horizontal Tabs ( Ext.TabPanel ) nested inside Vertical TabPanel.
    var tabs = new Ext.ux.VrTabPanel({
        title: 'Project Vision',
        activeTab: 0,
        width:1024,
        height:600,
        plain:true,
		    tabMarginTop: 30,	/* Push the tab strip down 30px from top. If not set, defaults to 15.*/
		    bodyStyle: 'padding: 10px',
        defaults:{autoScroll: true},
        items:[{
                title: 'Inbox',
                xtype: 'tabpanel',
				        activeTab: 0,
				        plain:true,
				        defaults:{autoScroll: true},
				        items:[{
						        title: 'My Space',
						        layout: 'border',
						        items: []
					        },{
						        title: 'Team Space',
						        listeners: {activate: handleActivate}
						        //html: "I am tab 4's content. I also have an event listener attached."
					        }
				        ]
            },{
                title: 'Organize',
                items: [{
                    title: 'Organize'
                }]
            },{
                title: 'Action',
                xtype: 'tabpanel',
                activeTab: 0,
                plain:true,
                defaults:{autoScroll: true},
                items:[{
                    title: 'To-Dos',
                    layout: 'border'

                  },{
                    title: 'Projects',
                    layout: 'border'
                  },{
                    title: 'Reference',
                    layout: 'border'
                  },{
                    title: 'Reminders',
                    layout: 'border'
                  }]
            }
        ]
    });
    var mainPanel = new Ext.Panel({
      title: 'ProjectVision',
      renderTo: 'tabs3',
      layout: 'border',
      items: [tabs]
    });
});
