import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import {  } from 'firebaseui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hrConsultation';
  
  constructor(private router: Router){}

  ngOnInit(): void {
    const firebaseUI = new firebaseui.auth.AuthUI(firebase.auth());
    const firebaseUiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function (authResult: any, redirectUrl: any) {
          console.log(authResult, redirectUrl);
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return true;
        },
        uiShown: () => {
          document.getElementById('loader')!.style.display = 'none';
        },
      },
      signInFlow: 'redirect',
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      // Your terms of service url.
      tosUrl: 'https://example.com/terms',
      // Your privacy policy url.
      privacyPolicyUrl: 'https://example.com/privacy',
    };
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        this.router.navigate(['home']);
      } else {
        firebaseUI.start('#firebaseui-auth-container', firebaseUiConfig);
      }
    });

  }
}
