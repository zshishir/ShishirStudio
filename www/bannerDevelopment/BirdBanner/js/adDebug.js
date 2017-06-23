var adDebug = ( function () {

    var enabled = false;

    function checkEnabled(){
        if( enabled ){
            return true;
        } else {
            return false;
        }
    }

    return {
        log : function( message ){
            if( checkEnabled()  && this.checkConsole() ){
                console.log( message );
            }
        },
        info : function( message ){
            if( checkEnabled() && this.checkConsole() ){
                console.info( message )
        }
    },
        alert : function( message ){
            if( checkEnabled() ){
                alert( message )
        }
    },
        enable : function(){
            enabled = true;
        },
        disable : function(){
            enabled = false;
        },
        checkConsole : function(){
        if( typeof console !== 'undefined' ){
            return true;
        } else return false;
    }
    }
})();
//example//
adDebug.enable();
adDebug.info('This will be logged');
 // adDebug.disable();
// adDebug.log('This won\'t be');