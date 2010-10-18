/*!
 * Module DummyProjectBag
 */

var DummyProjectBag = (function () {
    /*!
     * Project Menu
     */
    var projectMenu = new Ext.Toolbar({
        items: [{
            text: 'New',
            menu: new Ext.menu.Menu({
                items: [{
                    text: 'Quotation'
                },{
                    text: 'Invoice'
                },{
                    text: 'Job'
                },{
                    text: 'PO'
                },{
                    text: 'Files'
                },{
                    text: 'Project'
                },{
                    text: 'Payment'
                },{
                    text: 'Expense'
                }]
            })
        },{
            text: 'Delete'
        }]
    });

    /*!
     * Project Bag
     */
    var treePan = new Ext.tree.TreePanel({
        animate: true,
        loader: new Ext.tree.TreeLoader(),
        rootVisible: false,
        lines: false,
        root: new Ext.tree.AsyncTreeNode({
            id: 'isroot',
            expanded: true,
            children: [{
                text: 'Project Summary',
                leaf: true
            },{
                text: 'Profit & Loss',
                leaf: true
            },{
                text: 'Quotation',
                leaf: false,
                children: [{
                    text: '01/01/2010',
                    leaf: true
                },{
                    text: '10/10/2010',
                    leaf: true
                }]
            },{
                text: 'Invoice',
                leaf: false,
                children: [{
                    text: '01/01/2010',
                    leaf: true
                },{
                    text: '10/10/2010',
                    leaf: true
                }]
            },{
                text: 'Job',
                leaf: false,
                children: [{
                    text: '01/01/2010',
                    leaf: true
                },{
                    text: '10/10/2010',
                    leaf: true
                }]
            },{
                text: 'PO',
                leaf: false,
                children: [{
                    text: '01/01/2010',
                    leaf: true
                },{
                    text: '10/10/2010',
                    leaf: true
                }]
            },{
                text: 'Files',
                leaf: false,
                children: [{
                    text: '01/01/2010',
                    leaf: true
                },{
                    text: '10/10/2010',
                    leaf: true
                }]
            },{
                text: 'Project',
                leaf: false,
                children: [{
                    text: '01/01/2010',
                    leaf: true
                },{
                    text: '10/10/2010',
                    leaf: true
                }]
            },{
                text: 'Payment',
                leaf: false,
                children: [{
                    text: '01/01/2010',
                    leaf: true
                },{
                    text: '10/10/2010',
                    leaf: true
                }]
            },{
                text: 'Expense',
                leaf: false,
                children: [{
                    text: '01/01/2010',
                    leaf: true
                },{
                    text: '10/10/2010',
                    leaf: true
                }]
            }]
        })
    });

    var result = {
        region: 'west',
        title: 'Project Bag',
        width: 200,
        split: true,
        collapsible: true,
        layout: 'fit',
        items: [treePan],
        bbar: projectMenu
    }

    return result; // Export the module
}());
