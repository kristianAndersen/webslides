const sender=()=>{
    window['__onGCastApiAvailable'] = function(isAvailable) {
        if (isAvailable) {
           console.log('CastApiAvailable');
             initializeCastApi();
             setupEventListeners();
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


    const setupEventListeners=()=> {

        this.castContext.addEventListener(
            cast.framework.CastContextEventType.SESSION_STATE_CHANGED,
            (event) => {
              if (event.sessionState === cast.framework.SessionState.SESSION_STARTED) {
                console.log('Session started successfully!');
                session = castContext.getCurrentSession();
              } else if (event.sessionState === cast.framework.SessionState.SESSION_ENDED) {
                console.log('Session ended.');
                session = null;
              }
            }
          );

      document.getElementById('castButton').addEventListener('click', () => casting());
        }
  
}

export {sender}