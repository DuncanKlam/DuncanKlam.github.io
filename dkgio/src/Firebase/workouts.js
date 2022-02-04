import { collection, getDocs, setDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase.js';



let Workouts = {

    // async getAllAccounts(){
    //     const accountsCol = collection(db, 'accounts');
    //     const accountsSnapshot = await getDocs(accountsCol);
    //     const accountsList = accountsSnapshot.docs.map(doc => doc.data());
    //     return accountsList;
    // },
  
    // async getSpecificAccount(username){
    //     const accountDoc = doc(db, 'accounts', username);
    //     const docSnap = await getDoc(accountDoc);
    //     const user = docSnap.data();
    //     return user;
    // },
  
  }
   
  export default Workouts