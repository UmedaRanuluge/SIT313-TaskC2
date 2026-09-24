import app from './firebase.js';
import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore';

const db = getFirestore(app);
const usersCol = collection(db, 'users');

async function hashPassword(password) {
  const enc = new TextEncoder();
  const data = enc.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function createUser(fullName, email, password) {
  const hashed = await hashPassword(password);
  // optional: check for existing email
  const q = query(usersCol, where('email', '==', email));
  const existing = await getDocs(q);
  if (!existing.empty) throw new Error('Email already registered');
  const docRef = await addDoc(usersCol, {
    fullName,
    email,
    password: hashed,
    createdAt: new Date().toISOString()
  });
  return { id: docRef.id };
}

export async function loginUser(email, password) {
  const hashed = await hashPassword(password);
  const q = query(usersCol, where('email', '==', email));
  const snap = await getDocs(q);
  if (snap.empty) return null;
  for (const doc of snap.docs) {
    const data = doc.data();
    if (data.password === hashed) return { id: doc.id, ...data };
  }
  return null;
}

