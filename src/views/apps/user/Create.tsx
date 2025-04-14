import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import CreateUserApp from 'src/components/apps/users/Add-user';                                             
import BlankCard from 'src/components/shared/BlankCard';
import { CardContent } from '@mui/material';
import { UserProvider } from 'src/context/UserContext';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'User Create',
  },
];

const CreateUser = () => {
  return (
    <UserProvider>
      <PageContainer title="Create User" description="this is Create User">
        <Breadcrumb title="Create User" items={BCrumb} />
        <BlankCard>
          <CardContent>
            <CreateUserApp />
          </CardContent>
        </BlankCard>
      </PageContainer>
    </UserProvider>
  );
};
export default CreateUser;
