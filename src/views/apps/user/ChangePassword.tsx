import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import ChangePasswordApp from 'src/components/apps/users/Change-Pwd';                                             
import BlankCard from 'src/components/shared/BlankCard';
import { CardContent } from '@mui/material';
import { UserProvider } from 'src/context/UserContext';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'User Reset Password',
  },
];

const ChangePasswordUser = () => {
  return (
    <UserProvider>
      <PageContainer title="Change Reset User" description="this is Change Reset User">
        <Breadcrumb title="Change Reset User" items={BCrumb} />
        <BlankCard>
          <CardContent>
            <ChangePasswordApp />
          </CardContent>
        </BlankCard>
      </PageContainer>
    </UserProvider>
  );
};
export default ChangePasswordUser;
