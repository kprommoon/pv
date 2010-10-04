Ext.namespace('Ext.ux');
Ext.ux.AppTab = Ext.extend(Ext.TabPanel, {
    //default config
    appTab: false,
    baseCls: 'x-apptab-strip',

    initComponent: function() {
        Ext.apply(this.initialConfig);
        Ext.ux.AppTab.superclass.initComponent.apply(this, arguments);
    },

    getTemplateArgs : function(item) {
        var cls = item.closable ? 'x-tab-strip-closable' : '';
        if(item.appTab) {
            cls += ' apptab';
            item.title = "&nbsp;";
        }
        if(item.disabled){
            cls += ' x-item-disabled';
        }
        if(item.iconCls){
            cls += ' x-tab-with-icon';
        }
        if(item.tabCls){
            cls += ' ' + item.tabCls;
        }

        return {
            id: this.id + this.idDelimiter + item.getItemId(),
            text: item.title,
            cls: cls,
            iconCls: item.iconCls || ''
        };
    }
});