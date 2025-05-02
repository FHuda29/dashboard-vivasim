import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import CreateProductPartner from 'src/components/apps/productpartner/Add-product/index';                                             
import BlankCard from 'src/components/shared/BlankCard';
import { CardContent } from '@mui/material';
import { ProductPartnerProvider } from 'src/context/ProductPartnerContext/index';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Product Partner Create',
  },
];

const CreateProduct = () => {
  return (
    <ProductPartnerProvider>
      <PageContainer title="Create Product Partner" description="this is Create Product Partner">
        <Breadcrumb title="Create Product Partner" items={BCrumb} />
        <BlankCard>
          <CardContent>
            <CreateProductPartner />
          </CardContent>
        </BlankCard>
      </PageContainer>
    </ProductPartnerProvider>
  );
};
export default CreateProduct;