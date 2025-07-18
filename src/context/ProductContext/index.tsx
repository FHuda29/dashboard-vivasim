'use client'
import React, { createContext, useEffect, useState } from 'react';
import { ProductList } from 'src/utils/Utils';
//api
import axios from 'src/api/axios';

interface ProductContextType {
    products: ProductList[];
    loading: boolean;
    error: Error | null;
    //deleteEmail: () => {},
    addProduct: (newProduct: ProductList) => void;
    updateProduct: (updatedProduct: ProductList) => void;
}

export const ProductContext = createContext<ProductContextType | any>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<ProductList[]>([]);
    const [loading, setLoading] = useState(true);
    const [error] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                //const response = await axios.get('/api/data/invoicedata');
                const response = await axios.get('products');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                // setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Function to delete an invoice
    const deleteProduct = async (seq: number) => {
        try {

            await axios.delete('/api/data/invoicedata/deleteinvoice', { data: { Seq: seq } });
            setProducts((prevProducts) => prevProducts.filter((products) => products.seq !== seq));
        } catch (error) {
            console.error('Error deleting products:', error);

        }
    };

    const addProduct = async (newProduct: ProductList) => {
        try {
            //console.log("newProduct: ",newProduct);
            //console.log("json newProduct: ",JSON.stringify(newProduct));
            const response = await axios.post('products', newProduct);
            const addedProduct = response.data;
            setProducts((prevProduct) => [...prevProduct, addedProduct]);
        } catch (error) {
            console.error('Error adding products:', error);
        }
    };

    //  Function to update an invoice
    const updateProduct = async (updatedProduct: ProductList) => {
        try {
            const response = await axios.put('/api/data/invoicedata/updateinvoice', updatedProduct);
            const updated = response.data;
            setProducts((prevProducts) =>
                prevProducts.map((products) => (products.seq === updated.Seq ? updated : products))
            );
        } catch (error) {
            console.error('Error updating products:', error);
        }
    };

    return (
        <ProductContext.Provider value={{ products, loading, error, deleteProduct, addProduct, updateProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
