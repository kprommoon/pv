/*!
 * Module MessageBoard
 */

var MessageBoard = (function () {
    /*!
     * Message Board functions
     */
    var dateTimeToText = function(dt) {
		    var month = dt.getMonth() + 1
		    var day = dt.getDate()
		    var year = dt.getFullYear()
		    var min = dt.getMinutes()
		    var hour = dt.getHours()
		    return ("" + hour + ":" + min + " " + month + "/" + day + "/" + year)
    }

    var currentTime = function() {
		var currentTime = new Date()
		return dateTimeToText(currentTime)
    }

    var message = function(text) {
        var result = '';
        result += '<div class="message">';
        result += '<div class="message-top">';
        result += 'User';
        result += '</div>';
        result += '<div class="message-body">';
        result += text;
        result += '</div>';
        result += '<div class="message-bottom">';
        result += currentTime();
        result += '</div>';
        result += '</div>';
        return result;
    }

    /*!
     * Message Board
     */
    var mesBoard = [
        {
            region: 'center',
            layout: 'fit',
            items: [{
                autoScroll: true,
                html: '<div id="mboard">' + message('This quotation need to ' +
                    'prove by p\'Suda befor send to customer.') + '</div>'
            }]
        },{
            region: 'south',
            height: 150,
            split: false,
            title: 'Post a message',
            items: [{
                xtype: 'htmleditor',
                id: 'posttext',
	            enableColors: false,
                enableAlignments: false,
	            enableFont: false,
	            enableLinks: false,
	            enableFontSize: false,
    	        enableSourceEdit: false
            }],
            bbar: {
                items:[{
                    text: 'Submit',
                    iconCls: 'save',
    	            handler: function(){
                        var dh = Ext.DomHelper;
						postText = Ext.getCmp('posttext').getValue();
		                mboard = Ext.getDom('mboard').innerHTML;
		                mboard += message(postText);
		                Ext.getDom('mboard').innerHTML = mboard;
		                Ext.getCmp('posttext').setValue("");
		            }
                }]
            }
        }
    ];

    var result = {
        region: 'east',
        title: 'Message Board',
        layout: 'border',
        items: mesBoard,
        width: 250,
        split: true,
        collapsible: true
    };

    return result; // Export the module
}());
