'use client'
import React, { createContext, useEffect, useState } from 'react';
import { userList, userResetPwd } from 'src/utils/Utils';
import ApiConfig  from "src/constants/apiConstants";

import axios from '../../utils/axios';

interface UserContextType {
    user: userList[];
    loading: boolean;
    error: Error | null;
    //deleteEmail: () => {},
    addUser: (newUser: userList) => void;
    updateUser: (updatedUser: userList) => void;
    resetPasswordUser: (seq: number, newpass: string) => void;
}

export const UserContext = createContext<UserContextType | any>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [users, setUsers] = useState<userList[]>([]);
    const [loading, setLoading] = useState(true);
    const [error] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(ApiConfig.apiUrl + 'users');
                setUsers(response.data);
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

            await axios.delete('/api/data/invoicedata/deleteinvoice', { data: { seq: seq } });
            setUsers((prevUsers) => prevUsers.filter((users) => users.seq !== seq));
        } catch (error) {
            console.error('Error deleting products:', error);

        }
    };

    const addUser = async (newUser: userList) => {
        try {
            console.log("newUser: ",newUser);
            console.log("json newUser: ",JSON.stringify(newUser));
            const response = await axios.post(ApiConfig.apiUrl + 'users', newUser);
            const addedUser = response.data;
            setUsers((prevUser) => [...prevUser, addedUser]);
        } catch (error) {
            console.error('Error adding users:', error);
        }
    };

    //  Function to update an invoice
    const updateUser = async (updatedUser: userList) => {
        try {
            const response = await axios.put('users/updateuser', updatedUser);
            const updated = response.data;
            setUsers((prevUser) =>
                prevUser.map((users) => (users.seq === updated.seq ? updated : users))
            );
        } catch (error) {
            console.error('Error updating users:', error);
        }
    };

    const resetPasswordUser = async (seq: number, newpass: string) => {
        const resetPwdUser = { password: newpass };
        try {
            await axios.put(ApiConfig.apiUrl + 'users/reset/'+ seq, resetPwdUser);
            setUsers((prevUsers) => prevUsers.filter((users) => users.seq !== seq));
            //const updated = response.data;
            /*
            setUsers((prevUser) =>
                prevUser.map((users) => (users.seq === updated.seq ? updated : users))
            );
            */
        } catch (error) {
            console.error('Error updating users:', error);
        }
    };

    return (
        <UserContext.Provider value={{ users, loading, error, deleteUser, addUser, updateUser, resetPasswordUser }}>
            {children}
        </UserContext.Provider>
    );
};
