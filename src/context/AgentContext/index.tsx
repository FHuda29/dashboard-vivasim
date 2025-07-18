'use client'
import React, { createContext, useEffect, useState } from 'react';
import { agentList } from 'src/utils/Utils';
//api
import axios from 'src/api/axios';

interface AgentContextType {
    agent: agentList[];
    loading: boolean;
    error: Error | null;
    //deleteEmail: () => {},
    addAgent: (newUser: agentList) => void;
    updateAgent: (updatedUser: agentList) => void;
}

export const AgentContext = createContext<AgentContextType | any>(undefined);


export const AgentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [agents, setAgents] = useState<agentList[]>([]);
    const [loading, setLoading] = useState(true);
    const [error] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('agents');
                setAgents(response.data);
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

            await axios.delete('agents', { data: { seq: seq } });
            setAgents((prevUsers) => prevUsers.filter((users) => users.seq !== seq));
        } catch (error) {
            console.error('Error deleting products:', error);

        }
    };

    const addAgent = async (newUser: agentList) => {
        try {
            //console.log("newUser: ",newUser);
            //console.log("json newUser: ",JSON.stringify(newUser));
            const response = await axios.post('agents', newUser);
            const addedUser = response.data;
            setAgents((prevUser) => [...prevUser, addedUser]);
        } catch (error) {
            console.error('Error adding users:', error);
        }
    };

    //  Function to update an invoice
    const updateAgent = async (updatedUser: agentList) => {
        try {
            const response = await axios.put('agents/updatepartner', updatedUser);
            const updated = response.data;
            setAgents((prevUser) =>
                prevUser.map((users) => (users.seq === updated.seq ? updated : users))
            );
        } catch (error) {
            console.error('Error updating users:', error);
        }
    };


    return (
        <AgentContext.Provider value={{ agents, loading, error, deleteUser, addAgent, updateAgent }}>
            {children}
        </AgentContext.Provider>
    );
};
