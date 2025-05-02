'use client'
import React, { createContext, useEffect, useState } from 'react';
import { partnerList } from 'src/utils/Utils';
import ApiConfig  from "src/constants/apiConstants";

import axios from '../../utils/axios';

interface PartnerContextType {
    partner: partnerList[];
    loading: boolean;
    error: Error | null;
    //deleteEmail: () => {},
    addPartner: (newUser: partnerList) => void;
    updatePartner: (updatedUser: partnerList) => void;
}

export const PartnerContext = createContext<PartnerContextType | any>(undefined);


export const PartnerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [partners, setPartners] = useState<partnerList[]>([]);
    const [loading, setLoading] = useState(true);
    const [error] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(ApiConfig.apiUrl + 'partners');
                setPartners(response.data);
                setLoading(false);
            } catch (error) {
                // setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Function to delete an invoice
    const deleteUser = async (seq: number) => {
        try {

            await axios.delete(ApiConfig.apiUrl + 'partners', { data: { seq: seq } });
            setPartners((prevUsers) => prevUsers.filter((users) => users.seq !== seq));
        } catch (error) {
            console.error('Error deleting products:', error);

        }
    };

    const addPartner = async (newUser: partnerList) => {
        try {
            console.log("newUser: ",newUser);
            console.log("json newUser: ",JSON.stringify(newUser));
            const response = await axios.post(ApiConfig.apiUrl + 'partners', newUser);
            const addedUser = response.data;
            setPartners((prevUser) => [...prevUser, addedUser]);
        } catch (error) {
            console.error('Error adding users:', error);
        }
    };

    //  Function to update an invoice
    const updatePartner = async (updatedUser: partnerList) => {
        try {
            const response = await axios.put('partners/updatepartner', updatedUser);
            const updated = response.data;
            setPartners((prevUser) =>
                prevUser.map((users) => (users.seq === updated.seq ? updated : users))
            );
        } catch (error) {
            console.error('Error updating users:', error);
        }
    };


    return (
        <PartnerContext.Provider value={{ partners, loading, error, deleteUser, addPartner, updatePartner }}>
            {children}
        </PartnerContext.Provider>
    );
};
