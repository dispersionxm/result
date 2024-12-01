import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
	apiKey: 'AIzaSyDDBok14kej9V7cuTGh7HZLEw7SiQZY19w',
	authDomain: 'resultserver.firebaseapp.com',
	projectId: 'resultserver',
	storageBucket: 'resultserver.firebasestorage.app',
	messagingSenderId: '438034419238',
	appId: '1:438034419238:web:c759a64516aa55f631e0e7',
	databaseURL:
		'https://resultserver-default-rtdb.europe-west1.firebasedatabase.app/'
}

const app = initializeApp(firebaseConfig)

export const db = getDatabase(app)
