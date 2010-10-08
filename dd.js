Ext.onReady(function(){
    Ext.override(Ext.dd.DDProxy, {
        startDrag: function(x, y) {
            var dragEl = Ext.get(this.getDragEl());
            var el = Ext.get(this.getEl());

            dragEl.applyStyles({border:'','z-index':2000});
            dragEl.update(el.dom.innerHTML);
            dragEl.addClass(el.dom.className + ' dd-proxy');
            el.frame();
        },
        onDragOver: function(e, targetId) {
            //console.log('dragOver: ' + targetId);
            if('dd1-ct' === targetId || 'dd2-ct' === targetId) {
                var target = Ext.get(targetId);
                this.lastTarget = target;
                target.applyStyles({border:'1px solid #f00'});
            }
        },
        onDragOut: function(e, targetId) {
            //console.log('dragOut: ' + targetId);
            if('dd1-ct' === targetId || 'dd2-ct' === targetId) {
                var target = Ext.get(targetId);
                this.lastTarget = null;
                target.applyStyles({border:''});
            }
        },
        endDrag: function() {
            var dragEl = Ext.get(this.getDragEl());
            var el = Ext.get(this.getEl());
            if(this.lastTarget) {
                Ext.get(this.lastTarget).appendChild(el);
                el.applyStyles({position:'', width:''});
                el.highlight();
            }
            else {
                el.applyStyles({position:'absolute'});
                el.setXY(dragEl.getXY());
                el.setWidth(dragEl.getWidth());
            }
            Ext.get('dd1-ct').applyStyles({border:''});
            Ext.get('dd2-ct').applyStyles({border:''});

            if('function' === typeof this.config.fn) {
                this.config.fn.apply(this.config.scope || window, [this, this.config.dragData]);
            }
        }
    });

    // drop zones
    var dz1 = new Ext.dd.DropZone('dd1-ct', {ddGroup:'group'});
    var dz2 = new Ext.dd.DropZone('dd2-ct', {ddGroup:'group'});


    // container 1
    var dd11 = Ext.get('dd1-item1');
    dd11.setOpacity(0).fadeIn();
    dd11.dd = new Ext.dd.DDProxy('dd1-item1', 'group', {
        dragData:{name:'Item 1.1',index:1},
        scope:this,
        fn:function(dd, data) {
            alert(data.toSource());
        }
    });

    var dd12 = Ext.get('dd1-item2');
    dd12.setOpacity(0).fadeIn();
    dd12.dd = new Ext.dd.DDProxy('dd1-item2', 'group', {
        dragData:{name:'Item 1.2',index:2},
        scope:this,
        fn:function(dd, data) {
            alert(data.toSource());
        }
    });

    var dd13 = Ext.get('dd1-item3');
    dd13.setOpacity(0).fadeIn();
    dd13.dd = new Ext.dd.DDProxy('dd1-item3', 'group');


    // container 2
    var dd21 = Ext.get('dd2-item1');
    dd21.setOpacity(0).fadeIn();
    dd21.dd = new Ext.dd.DDProxy('dd2-item1', 'group');

    var dd22 = Ext.get('dd2-item2');
    dd22.setOpacity(0).fadeIn();
    dd22.dd = new Ext.dd.DDProxy('dd2-item2', 'group');

    var dd23 = Ext.get('dd2-item3');
    dd23.setOpacity(0).fadeIn();
    dd23.dd = new Ext.dd.DDProxy('dd2-item3', 'group');
})