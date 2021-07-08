
var LearningDesign = function(options){
 
    /*
     * Variables accessible
     * in the class
     */
    var vars = {
        myVar  : 'original Value',
        LOutcomes : [("LO1","Knowledge"),("LO1","Knowledge")]
    };
 
    /*
     * Can access this.method
     * inside other methods using
     * root.method()
     */
    var root = this;
 
    /*
     * Constructor
     */
    this.construct = function(options){
        $.extend(vars , options);
    };
 
    /*
     * Public method
     * Can be called outside class
     */
    this.myPublicMethod = function(){
        console.log(vars.myVar);
 
        myPrivateMethod();
    };
 
    /*
     * Private method
     * Can only be called inside class
     */
    var myPrivateMethod = function() {
        console.log('accessed private method');
    };
 
 
    /*
     * Pass options when class instantiated
     */
    this.construct(options);
 
};
 

function FitToContent(id, maxHeight, minHeight)
  {
   var text = id && id.style ? id : document.getElementById(id);
   var parText = id.parentElement && id.parentElement.id.style ? id : document.getElementById(id);

   if ( !text )
      return;

   var adjustedHeight = text.clientHeight;
    //console.log("text.scrollHeight " + text.scrollHeight);
    //console.log("text.rows " + text.rows.);
   if ( !maxHeight || maxHeight > adjustedHeight )
    {
        //console.log(parText);
      adjustedHeight = Math.max(text.scrollHeight, adjustedHeight);
      if ( maxHeight )
         adjustedHeight = Math.min(maxHeight, adjustedHeight);
      if ( adjustedHeight > text.clientHeight )
         text.style.height = adjustedHeight + "px";
        
    }
    //if (text.scrollHeight < 120)
    //{text.style.height = "120px";}
  }


// activityFile ...

      