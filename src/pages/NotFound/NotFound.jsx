import { StyledButton } from 'components/SectionForm/SectionForm.styled';
import { StyledH1 } from 'pages/ContactsPage/ContactsPage.styled';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: 50 }}>
      <StyledH1>Ooops something went wrong</StyledH1>
      <div style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
        <StyledH1>Click here to return to the HomePage: </StyledH1>
        <StyledButton type="button" onClick={() => navigate('/')}>
          Home
        </StyledButton>
      </div>
    </div>
  );
};
