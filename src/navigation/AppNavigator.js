import React, { useEffect, useState, useCallback } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, RegistrationScreen, SplashScreen } from '../screens/';
import { firebase } from '../firebase/config'
import MainTabNavigator from './MainTabNavigator';
import { AuthContext } from '../utils/authContext'
import { getUserMainScreen, getUserInvestmentScreen,getUserWallet } from '../api/api'
import { useDispatch } from 'react-redux'
import { refreshmain, refreshinvestment } from '../redux/alasApp'

const AuthNavigator = createStackNavigator();

export default function AuthStack(){
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const distpatch = useDispatch()

  const refreshMainScreen = data => distpatch(refreshmain(data))

  const refreshInvestmentScreen = data => distpatch(refreshinvestment(data))

  const setCurrentUserData = useCallback((currentUser) => {
    console.log('Updating user data!!')
    setUser(currentUser);
  },[]);
 
  // Handle user state changes  
  function onAuthStateChanged(user) {
    let userWithData = {}
    
    if(user != null){
      user.getIdToken().then(
        idToken => {
          userWithData.token = idToken;
          userWithData.userAuth = user; 
          console.log(`Retrieved token from get Token${userWithData.token}`)
          
          //Get user DATA.
          firebase.firestore().collection('users').doc(user.uid).get().then(
            userDoc => {
              userWithData.userData = userDoc.data()
              //Get user Main Screen Data.
              getUserMainScreen(userWithData.token).then(
              (response) => {
                    userWithData.userHome = response;
              });

              getUserWallet(userWithData.token).then(
                (response) => {
                    userWithData.wallet = response
                }
              )

              getUserInvestmentScreen(userWithData.token).then(
                (response) => {
                  userWithData.userInvestment = response;
                  //Set user in state.
                  refreshMainScreen(userWithData.userHome)
                  refreshInvestmentScreen(userWithData.userInvestment)
                  setUser(userWithData);
              });

          });
      });
    } else{
      setUser(user); 
    }
    
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);


  if (initializing) {	
    return (	
      <SplashScreen/>	
    )	
  }

  return (

        user ? (
          <AuthContext.Provider value={{user, setCurrentUserData}}>
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

