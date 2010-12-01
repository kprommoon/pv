Ext.onReady(function() {
// above are for test only

var sm = new Ext.grid.CheckboxSelectionModel(); // for making checkboxes to select grids

/*!
 * Contact List
 */
var addrGrid = new Ext.grid.GridPanel({
    autoHeight: true,
    columnLines: true,
    sm: sm,
    cm: new Ext.grid.ColumnModel({
        columns: [
            sm,
            {header: "Code", sortable: true, dataIndex: 'code'},
            {header: "Contact as", sortable: true, dataIndex: 'contype'},
            {header: "Name", sortable: true, dataIndex: 'name'},
            {header: "Email", sortable: true, dataIndex: 'email'},
            {header: "Company", sortable: true, dataIndex: 'company'},
            {header: "Position", sortable: true, dataIndex: 'position'},
            {header: "Department", sortable: true, dataIndex: 'department'},
            {header: "Mobile", sortable: true, dataIndex: 'phone'}
        ]
    }),
    store: new Ext.data.Store({
        data: [
            ["1234","Customer","Harrison Ford","a@b.com","Lucasarts","Voice Actor","Star Wars","1234567890"],
            ["1234","Customer","Harrison Ford","a@b.com","Lucasarts","Voice Actor","Star Wars","1234567890"],
            ["1234","Customer","Harrison Ford","a@b.com","Lucasarts","Voice Actor","Star Wars","1234567890"]
        ],
        reader: new Ext.data.ArrayReader({id: 'id'},[
            {name: 'code'},
            {name: 'contype'},
            {name: 'name'},
            {name: 'email'},
            {name: 'company'},
            {name: 'position'},
            {name: 'department'},
            {name: 'phone'}
        ])
    }),
    tbar: [{
        text: 'New',
        iconCls: 'add-prop'
    },{
        text: 'Delete',
        iconCls: 'del-prop'
    },'->',
    new Ext.app.SearchField({
        width: 240,
        store: this.searchStore,
        paramName: 'q'
    })]
});

/*!
 * General Form
 */
var generalForm = new Ext.Panel({
    layout: 'form',
    title: 'General',
    defaultType: 'textfield',
    defaults: {width: 200},
    items: [{
        fieldLabel: 'Code',
        name: 'code'
    },{
        xtype: 'combo',
        mode: 'local',
        editable: false,
        fieldLabel: 'Prefix',
        name: 'prefix',
        triggerAction: 'all',
        displayField: 'name',
        valueField: 'value',
        emptyText: 'Select prefix...',
        store: new Ext.data.SimpleStore({
            fields: ['name','value'],
            data: [
                ['Mr.','0'],
                ['Mrs.','1'],
                ['Miss','2']
            ]
        })
    },{
        fieldLabel: 'Name',
        name: 'name'
    },{
        fieldLabel: 'Local name',
        name: 'local_name'
    },{
        fieldLabel: 'Nickname',
        name: 'nickname'
    },{
        fieldLabel: 'Company name',
        name: 'company_name'
    },{
        fieldLabel: 'Link to Company',
        name: 'link_to_company'
    },{
        xtype: 'radiogroup',
        fieldLabel: 'Type',
        items: [{
            boxLabel: 'Person',
            name: 'type',
            inputValue: 'person'
        },{
            boxLabel: 'Company',
            name: 'type',
            inputValue: 'company'
        }]
    },{
        xtype: 'checkbox',
        fieldLabel: 'Customer',
        name: 'customer'
    },{
        xtype: 'checkbox',
        fieldLabel: 'Supplier',
        name: 'supplier'
    },{
        xtype: 'checkbox',
        fieldLabel: 'Staff',
        name: 'staff'
    },{
        xtype: 'combo',
        mode: 'local',
        editable: false,
        fieldLabel: 'Status',
        name: 'status',
        triggerAction: 'all',
        displayField: 'name',
        valueField: 'value',
        emptyText: 'Select status...',
        store: new Ext.data.SimpleStore({
            fields: ['name','value'],
            data: [
                ['Active','1'],
                ['Inactive','0']
            ]
        })
    },{
        xtype: 'htmleditor',
        fieldLabel: 'Remark',
        name: 'remark',
        width: 200,
        enableColors: false,
        enableAlignments: false,
        enableFont: false,
        enableLinks: false,
        enableFontSize: false,
        enableSourceEdit: false
    }]
});

/*!
 * Contact Form
 */
var contactForm = new Ext.Panel({
    layout: 'form',
    title: 'Contact',
    defaultType: 'textfield',
    defaults: {width: 200},
    items: [{
        fieldLabel: 'Email',
        name: 'email'
    },{
        fieldLabel: 'Second Email',
        name: 'email2'
    },{
        fieldLabel: 'Phone',
        name: 'phone'
    },{
        fieldLabel: 'Mobile',
        name: 'mobile'
    },{
        fieldLabel: 'Fax',
        name: 'fax'
    },{
        fieldLabel: 'Website',
        name: 'website'
    },{
        fieldLabel: 'Address Line 1',
        name: 'address1'
    },{
        fieldLabel: 'Address Line 2',
        name: 'address2'
    },{
        fieldLabel: 'Address Line 3',
        name: 'address3'
    }]
});

/*!
 * Business Form
 */
var businessForm = new Ext.Panel({
    layout: 'form',
    title: 'Business',
    defaultType: 'textfield',
    defaults: {width: 200},
    items: [{
        fieldLabel: 'Department',
        name: 'department'
    },{
        fieldLabel: 'Bank account',
        name: 'bank_account'
    },{
        fieldLabel: 'Bank name',
        name: 'bank_name'
    },{
        fieldLabel: 'Bank branch',
        name: 'bank_branch'
    },{
        fieldLabel: 'Tax code',
        name: 'tax_code'
    },{
        fieldLabel: 'Tax type',
        name: 'tax_type'
    }]
});

/*!
 * HR Property Grid
 */
var HRGrid = new Ext.grid.PropertyGrid({
    title: 'HR',
    autoHeight: true,
    style: 'border-width: 1px',
    propertyNames: {
        account_manager: 'Account Manager',
        staff_type: 'Staff Type',
        role_name: 'Role name',
        employee_date: 'Employee date',
        resign_date: 'Resign date'
    },
    source: {
        account_manager: '',
        staff_type: '',
        Position: '',
        Department: '',
        role_name: '',
        Gender: '',
        birth_date: '',
        national_code: '',
        passport_code: '',
        marrital_status: '',
        ethnicity: '',
        nationality: '',
        religion: '',
        employee_date: '',
        resign_date: '',
        active_date: '',
        inactive_date: '',
        creater_id: '',
        create_date: '',
        update_id: '',
        update_date: ''
    }
});

/*!
 * Tabbed Form
 */
var addrTab = new Ext.FormPanel({
    defaultType: 'textfield',
    bodyStyle: 'border: 0 none',
    tbar: [{
        text: 'Save',
        iconCls: 'save',
        handler: function() {
            addrTab.getForm().submit({
                params: {
                    id: 1
                }
            });
        }
    }],
    items: [{
        xtype: 'tabpanel',
        activeTab: 0,
        bodyStyle: 'border: 0 none; padding: 10px',
        items: [generalForm, contactForm, businessForm, HRGrid],
    }]
});

/*!
 * Container
 */
var page = new Ext.Panel({
    layout: 'border',
    items: [{
        region: 'center',
        items: [addrGrid]
    },{
        region: 'east',
        layout: 'fit',
        collapsible: true,
        split: true,
        width: 327,
        items: [addrTab]
    }]
});

// below are for test only
var viewport = new Ext.Viewport({
    layout: 'fit',
    items: [page]
});

});
