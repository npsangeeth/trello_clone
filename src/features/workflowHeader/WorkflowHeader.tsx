import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  Box,
} from "@mui/material";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import '../../index.css';
import RoundButton from '../../shared/components/RoundButton';


function WorkflowHeader() {
  return (
    <AppBar 
      position="static"
      sx={{
        backgroundColor: '#34383a',
        color: '#fff'
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
          minHeight: '40 !important',
        }}
      >
        <Button
          size="small"
          sx={{
            display: 'flex',
            gap: 1,
            textTransform: 'none',
            backgroundColor: '#34383a',
            color: '#fff',
            ':hover': {
              backgroundColor: '#4a4e50',
            },
            px: 0
          }}
        >
          <FontAwesomeIcon icon={faTrello} size="lg" />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Trello Clone
          </Typography>
        </Button>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            width: '60%',
          }}
        >
          <TextField 
            id="search-bar" 
            label="Search" 
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: '#fff',
              borderRadius: 1,
              width: '90%',
            }} 
          />
          <Box>
            
          </Box>
          <Button 
            variant="contained"
            color="primary"
            sx={{
              marginLeft: 2
            }}
          >
            Create
          </Button>
        </Box>


        <Box>
          <RoundButton btnSize={35} >
            <Typography variant="body1" sx={{ color: '#fff' }}>
              SP
            </Typography>
          </RoundButton>
        </Box>
       
        
      </Toolbar>
    </AppBar>
  );
}

export default WorkflowHeader;