import firebase, { db } from './firebase';
import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";

const collectionName='ProjectUsers';
const itemsCollection=collection(db, collectionName);

// CREATE
export const createItem=(obj)=>{
    addDoc(itemsCollection, obj);
}

// UPDATE
export const updateItem = async (id, obj) => {
    await updateDoc(doc(db, collectionName, id), obj)
}

// READ
export const getItems= async () => {
    const result = await getDocs(query(itemsCollection));
    return result.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    }
    );
}

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemByName = async (name) => {
    const result = await getDocs(query(itemsCollection, where('name', '==', name)));
    return result.docs[0].data();
}

export const getPacientById = async (id) => {
    const result = await getDoc(doc(db, collectionName, id));
    return result.data();
}

// DELETE
export const deleteItemById = async (id) => {
    await deleteDoc(doc(db, collectionName, id));
}
//ACCESS
export const access=async(name)=>{
    const result=await getDocs(query(itemsCollection, where('name', '==', name)));
    if(result.docs.length==0){
        const a=await addDoc(itemsCollection,{name});
        return a.id;
    }
    return result.docs[0].id;
}