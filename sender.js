const sender=()=>{
    window['__onGCastApiAvailable'] = function(isAvailable) {
        if (isAvailable) {
           console.log('CastApiAvailable');
             initializeCastApi();
        }
    };
      const initializeCastApi = ()=> {
      
        cast.framework.CastContext.getInstance().setOptions({
            receiverApplicationId:      'ED052386',
            autoJoinPolicy:             chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,
            resumeSavedSession:         true,
        });


      };
 

      const casting=()=> {
        const castContext = cast.framework.CastContext.getInstance();
        const session = castContext.getCurrentSession();
    
        if (!session) {
            console.warn('No cast session available. Prompting user to select a cast device.');
            // Trigger the device selection prompt
            castContext.requestSession();
            return;
        }
    
        console.log('Cast session available. Sending message.');
  
    }



      document.getElementById('castButton').addEventListener('click', () => casting());

  
}

export {sender}