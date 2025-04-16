import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import EditProductPartner from 'src/components/apps/productpartner/Edit-product/index';
import { ProductPartnerProvider } from 'src/context/ProductPartnerContext/index';
import BlankCard from 'src/components/shared/BlankCard';
import { CardContent } from '@mui/material';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Product Partner Edit',
  },
];

const ProductPartnerEdit = () => {
  return (
    <ProductPartnerProvider>
      <PageContainer title="Edit Product Partner" description="this is Edit Product Partner">
        <Breadcrumb title="Edit Product Partner" items={BCrumb} />
        <BlankCard>
          <CardContent>
            <EditProductPartner />
          </CardContent>
        </BlankCard>
      </PageContainer>
    </ProductPartnerProvider>
  );
};

export default ProductPartnerEdit;
