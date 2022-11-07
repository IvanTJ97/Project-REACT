import {collection,getDocs,query,doc,getDoc,addDoc,deleteDoc,updateDoc,where} from "firebase/firestore";
import {db} from './firebase';
// CREATE
export const createPena=async obj=>{
    const colRef=collection(db, 'PENAS');
    const data=await addDoc(colRef,obj);
    return data.id;
};
//CREATE MEMBER
export const createMember=async (penaID,obj)=>{
    const colRef=collection(db,'PENAS',penaID,'MEMBERS');
    const data=await addDoc(colRef,obj);
    return data.id;
};
//READ MEMBERS
export const getMembers=async(penaID)=>{
    const colRef=collection(db,'PENAS',penaID,'MEMBERS');
    const result=await getDocs(query(colRef));
    return getArrayFromCollection(result);
};
// UPDATE
export const updatePena=async(id,obj)=>{
    const colRef=collection(db,'PENAS');
    await updateDoc(doc(colRef,id),obj)
};
// READ
export const getPenas=async()=>{
    const colRef=collection(db,'PENAS');
    const result=await getDocs(query(colRef));
    return getArrayFromCollection(result);
};
// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getPenaByCondition=async value=>{
    const colRef=collection(db,'PENAS');
    const result=await getDocs(query(colRef,where('nombre','==',value)));
    return getArrayFromCollection(result);
};
export const getPenaById=async id=>{
    const colRef=collection(db,'PENAS');
    const result=await getDoc(doc(colRef,id));
    return result.data();
};
// DELETE
export const deletePena=async id=>{
    const colRef=collection(db,'PENAS');
    await deleteDoc(doc(colRef,id));
};
const getArrayFromCollection=collection=>{
    return collection.docs.map(doc=>{
        return {...doc.data(),id:doc.id};
    });
};