import { Box, Button, TextField } from '@mui/material';

const AddCard = ({ setIsAddingCard } : { setIsAddingCard: (isAddingCard: boolean) => void }) => {
  return (
    <Box 
        sx={{
            border: '1px solid #dfe1e6',
            borderRadius: 2,
            backgroundColor: '#f0e6e6',
            p: 2 
        }}
    >
        <TextField
            placeholder="Enter card title..."
            variant="outlined"
            size="small"
            fullWidth
            sx={{
                backgroundColor: '#ffffff',
            }}
        />
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: 1,
            }}
        >
            <Button
                sx={{
                    width: '60%',
                    textTransform: 'none',
                    borderRadius: 2,
                    boxShadow: 'none',
                    backgroundColor: '#f4f5f7',
                    margin: 1,
                    color: '#000000',
                    fontWeight: 'bold',
                    ":hover":{
                        backgroundColor: '#fbd5d5',
                    }
                }}
                onClick={() => setIsAddingCard(false)}
            >
                Add Card
            </Button>
            <Button
            sx={{
                width: '30%',
                textTransform: 'none',
                borderRadius: 2,
                boxShadow: 'none',
                backgroundColor: '#f4f5f7',
                margin: 1,
                color: '#000000',
                fontWeight: 'bold',
                ":hover":{
                backgroundColor: '#fbd5d5',
                }
            }}
            onClick={() => setIsAddingCard(false)}
            >
                Cancel
            </Button>
        </Box>
       
    </Box>
  );
}

export default AddCard;