'use client'
import React, { createContext, useEffect, useState } from 'react';
import { PartnerProductList } from 'src/utils/Utils';
//api
import axios from 'src/api/axios';

interface ProductPartnerContextType {
    products: PartnerProductList[];
    loading: boolean;
    error: Error | null;
    //deleteEmail: () => {},
    addProduct: (newProduct: PartnerProductList) => void;
    updateProduct: (updatedProduct: PartnerProductList) => void;
}

export const ProductPartnerContext = createContext<ProductPartnerContextType | any>(undefined);

export const ProductPartnerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<PartnerProductList[]>([]);
    const [loading, setLoading] = useState(true);
    const [error] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                //const response = await axios.get('/api/data/invoicedata');
                const response = await axios.get('product/partner');
                console.log("edit product partner: ",response.data);
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

    const addProduct = async (newProduct: PartnerProductList) => {
        try {
            const masterProduct = await axios.get('products/package/'+newProduct.package_id);
            console.log("master product: ",masterProduct.data);

            //add partner product
            newProduct.package_name = masterProduct.data.package_name;
            newProduct.country = masterProduct.data.country;
            newProduct.days = masterProduct.data.days;
            newProduct.quota = masterProduct.data.quota;
            newProduct.status = masterProduct.data.status;

            const response = await axios.post('product/partner', newProduct);
            const addedProduct = response.data;
            setProducts((prevProduct) => [...prevProduct, addedProduct]);
        } catch (error) {
            console.error('Error adding products:', error);
        }
    };

    //  Function to update an invoice
    const updateProduct = async (updatedProduct: PartnerProductList) => {
        try {
            const seq = updatedProduct.seq;
            const response = await axios.put('product/partner/salling/'+seq, updatedProduct);
            const updated = response.data;
            setProducts((prevProducts) =>
                prevProducts.map((products) => (products.seq === updated.seq ? updated : products))
            );
        } catch (error) {
            console.error('Error updating product partner:', error);
        }
    };

    return (
        <ProductPartnerContext.Provider value={{ products, loading, error, deleteProduct, addProduct, updateProduct }}>
            {children}
        </ProductPartnerContext.Provider>
    );
};
