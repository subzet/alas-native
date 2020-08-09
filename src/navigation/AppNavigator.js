import React, { useEffect, useState } from 'react'
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
  const [user, setUser] = useState();

    // Handle user state changes
  function onAuthStateChanged(user) {
    if(user != null){
      firebase.firestore().collection('users').doc(user.uid).get().then(
        userDoc => { 
          const userWithData = {
            userData : userDoc.data(),
            userHome : getUserMainScreen(user.uid),
            userInvestment : getUserInvestmentScreen(user.uid),
            userAuth : user 
          }
          setUser(userWithData);
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
          <AuthContext.Provider value={user}>
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

