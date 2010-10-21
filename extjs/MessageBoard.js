/*!
 * Module MessageBoard
 */

var MessageBoard = (function () {

    var dateTimeToText = function(dt){
		    var month = dt.getMonth() + 1
		    var day = dt.getDate()
		    var year = dt.getFullYear()
		    var min = dt.getMinutes()
		    var hour = dt.getHours()
		    return ("" + hour + ":" + min + " " + month + "/" + day + "/" + year)
    }

    var currentTime = function(){
		var currentTime = new Date()
		return dateTimeToText(currentTime)
    }

    var messagePacking = function(message){
	    var m = ""
   	    m = m + "<div class='by'>Apirak</div>"
	    m = m + "<div class='message'>" + message + "</div>"
	    m = m + "<div class='date'>" + currentTime() + "</div>"
	    m = "<div class='stickynote'>" + m + "</div>"
	    return m
    }

    result = {
                region: 'east',
                title: 'Message Board',
                layout: 'vbox',
                width: 300,
                split: true,
                collapsible: true,
                layoutConfig: {
                    align: 'stretch',
                    pack: 'start'
                },
                items: [{
                    html: "<div id='log-list'><div class='stickynote'>" +
                        "<div class='by'>Apirak</div>" +
                        "<div class='message'>This quotation need to prove " +
                        "by p'Suda befor send to customer.</div>" +
                        "<div class='date'>14:13 10/14/2010</div></div></div>",
                    border:false,
                    flex:1
                },{
                    xtype:'htmleditor',
                    id:'messageLog',
                    border: false,
                    height:100,
                    anchor:'98%',
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
							temp_message = Ext.getCmp('messageLog').getValue();
			                logListHTML = Ext.getDom('log-list').innerHTML;
			                loglistHTML = logListHTML + messagePacking(temp_message);
			                Ext.getDom('log-list').innerHTML = loglistHTML;
			                Ext.getCmp('messageLog').setValue("");
			            }
                    }]
                }
            }
    return result; // Export the module
}());
