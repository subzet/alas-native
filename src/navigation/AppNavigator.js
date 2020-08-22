import React, { useEffect, useState, useCallback } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, RegistrationScreen, SplashScreen } from '../screens/';
import { firebase } from '../firebase/config'
import MainTabNavigator from './MainTabNavigator';
import { AuthContext } from '../utils/authContext'
import { getUserMainScreen, getUserInvestmentScreen } from '../api/api'

const AuthNavigator = createStackNavigator();

export default function AuthStack(){
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [userAuth, setUserAuth] = useState();
  
  const [userData, setUserData] = useState();
  const setCurrentUserData = (currentUser) => {
    console.log("Updating..")
    setUserData(currentUser)
    console.log(`User balance: ${userData.userHome.balanceLC}`)
  }

  // const setCurrentUserData = useCallback((currentUser, setNewData) => {
  //    console.log(user.userHome.balanceLC)
  //    console.log('Updating user data!!')
  //    setNewData(currentUser);
  //    console.log(user.userHome.balanceLC) 
  //  },[]);
 
  // Handle user state changes  
  function onAuthStateChanged(user) {
    let userWithAuthData = {}
    if(user != null){
      user.getIdToken().then(
        idToken => {
          userWithAuthData.token = idToken;
          console.log(`Retrieved token from get Token: ${userWithAuthData.token}`)

           //Sets userAuth.
          let userAppData = {}
          //Retrieves user info for the first time.
          firebase.firestore().collection('users').doc(user.uid).get().then(
          userDoc => {
              userAppData.userData = userDoc.data()
                      
              //Get user Main Screen Data.
              getUserMainScreen(userWithAuthData.token).then(
              (response) => {
                  userAppData.userHome = response;
                  userAppData.userInvestment = getUserInvestmentScreen(userWithAuthData.token)
                  //Set user in state.
                  setUserData(userAppData);
                  setUserAuth(userWithAuthData)
                });
            });
      });

    } else{
      setUserAuth(user); 
    }
    
    if (initializing) setInitializing(false);
  }

  

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  //Re-renders when userData changes.
  useEffect(() => {
    console.log("User data changed, talking from useEffect ;B")
  },[setUserData])

  if (initializing) {	
    return (	
      <SplashScreen/>	
    )	
  }

  return (

        userAuth ? (
          <AuthContext.Provider value={{userAuth, userData, setCurrentUserData}}>
              <AuthNavigator.Navigator screenOptions={{headerShown: false}}>
                <AuthNavigator.Screen name="Home" component={MainTabNavigator}/>
              </AuthNavigator.Navigator>
          </AuthContext.Provider>
        ) : (
          <>
          <AuthNavigator.Navigator screenOptions={{headerShown: false}}>
            <AuthNavigator.Screen name="Login" component={LoginScreen} />
            <AuthNavigator.Screen name="Registration" component={RegistrationScreen} />
          </AuthNavigator.Navigator>
          </>
        )
  );
}

