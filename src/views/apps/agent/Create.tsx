import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import CreateAgentnerApp from 'src/components/apps/agent/Add-agent';                                             
import BlankCard from 'src/components/shared/BlankCard';
import { CardContent } from '@mui/material';
import { AgentProvider } from 'src/context/AgentContext';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Agent Create',
  },
];

const CreatePartner = () => {
  return (
    <AgentProvider>
      <PageContainer title="Agent User" description="this is Create Agent">
        <Breadcrumb title="Agent User" items={BCrumb} />
        <BlankCard>
          <CardContent>
            <CreateAgentnerApp />
          </CardContent>
        </BlankCard>
      </PageContainer>
    </AgentProvider>
  );
};
export default CreatePartner;
