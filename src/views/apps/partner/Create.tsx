import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import CreatePartnerApp from 'src/components/apps/partner/Add-partner';                                             
import BlankCard from 'src/components/shared/BlankCard';
import { CardContent } from '@mui/material';
import { PartnerProvider } from 'src/context/PartnerContext';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Partner Create',
  },
];

const CreatePartner = () => {
  return (
    <PartnerProvider>
      <PageContainer title="Partner User" description="this is Create Partner">
        <Breadcrumb title="Partner User" items={BCrumb} />
        <BlankCard>
          <CardContent>
            <CreatePartnerApp />
          </CardContent>
        </BlankCard>
      </PageContainer>
    </PartnerProvider>
  );
};
export default CreatePartner;
