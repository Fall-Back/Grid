/*
    Set all .grid__cell elements to be the same height as the parent.
    This is used in-lieu of proper CSS support.
*/
if (
    (document.all && document.querySelector) // IE8-10
 || (navigator.userAgent.indexOf('Opera Mini') > -1)  // Opera Mini
 || (window.opera && window.opera.version() >= 12)  // Opera >= 12
) {
    function fix_height() {
        // Reset height:
        jQuery('.grid__cell').each(function(){
            var $this = jQuery(this);
            $this.height('auto');
        });
        // Fix height:
        jQuery('.grid__cell').each(function(){
            var $this = jQuery(this);
            var h = $this.parent().height();
            $this.height(h + 'px');
        });
    }
    
    jQuery(function() {
        fix_height();
    });
    
    jQuery(window).resize(function() {
        fix_height();
    });
}