const SESSION_KEY = "khareta_credential";


 const restoreState = () => {
        try {
            const credential = sessionStorage.getItem(SESSION_KEY);
            if(credential === null ){
                return undefined;
            }
            let stateObj = JSON.parse(credential);
            stateObj.login.status = null;
            return stateObj;
        } catch(err) {
            return undefined;
        }
    }

 const saveState = (data) => {
        try{
            const credential = JSON.stringify(data);
            sessionStorage.setItem(SESSION_KEY, credential);
        }catch(err){
            // ignore
        }  
    }

export { saveState, restoreState };