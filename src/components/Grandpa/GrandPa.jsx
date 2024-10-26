import React, { createContext } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

export const Context = createContext()


const GrandPa = () => {
    const have = "Gold-Chain"
    const have2 = "diamond"
    const have3 = "Silver"
    return (
        <Context.Provider value={{have2, have3, have}}>
            <div className='border border-orange-600 rounded-lg'>
            <h1 className='text-2xl font-bold p-6'>GrandPa</h1>
            <div className='flex gap-6 m-6'>
                <Father></Father>
                <Uncle give={have}></Uncle>
                <Aunty></Aunty>
            </div>
        </div>
        </Context.Provider>
    );
};

export default GrandPa;