modules.define('locked', ['i-bem-dom'], function(provide, bemDom) {
    
    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    console.log("locked");
                }
            }
        }
    }));
    
});
