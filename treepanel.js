Ext.onReady(function(){
    /*!
     * Tree Panel
     */
    var treePan = new Ext.tree.TreePanel({
        title: 'Tree Panel Test',
        animate: true,
        loader: new Ext.tree.TreeLoader(),
        rootVisible: false,
        lines: false,
        root: new Ext.tree.AsyncTreeNode({
            id: 'isroot',
            expanded: true,
            children: [{
                text: 'Without Children',
                leaf: true
            },{
                text: 'With Children',
                leaf: false,
                children: [{
                    text: 'First Chld',
                    leaf: true
                },{
                    text: 'Second Child',
                    leaf: false,
                    children: [{
                        text: 'A Leaf',
                        leaf: true
                    }]
                }]
            }]
        })
    })

    /*!
     * Viewport
     */
    var viewport = new Ext.Viewport({
        layout: 'fit',
        items: treePan
    });
});