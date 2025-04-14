import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
//import CreateInvoiceApp from 'src/components/apps/invoice/Add-invoice';
import CreateProductApp from 'src/components/apps/product/Add-product';                                             
import BlankCard from 'src/components/shared/BlankCard';
import { CardContent } from '@mui/material';
import { ProductProvider } from 'src/context/ProductContext';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Product Create',
  },
];

const CreateProduct = () => {
  return (
    <ProductProvider>
      <PageContainer title="Create Product" description="this is Create Product">
        <Breadcrumb title="Create Product" items={BCrumb} />
        <BlankCard>
          <CardContent>
            <CreateProductApp />
          </CardContent>
        </BlankCard>
      </PageContainer>
    </ProductProvider>
  );
};
export default CreateProduct;
