// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCHY1xcrmISyHWF9CvBZy2EMtow7oYmAFQ',
	authDomain: 'resultservertask.firebaseapp.com',
	projectId: 'resultservertask',
	storageBucket: 'resultservertask.firebasestorage.app',
	messagingSenderId: '109101246549',
	appId: '1:109101246549:web:4ea6412d45a0e75fa74cdc',
	databaseURL:
		'https://resultservertask-default-rtdb.europe-west1.firebasedatabase.app/',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getDatabase(app)
