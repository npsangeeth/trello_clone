import { Box, Typography } from '@mui/material';
import EditSquareIcon from '@mui/icons-material/EditSquare';
const TaskCard = ({ description }: { description: string }) => {
  return (
    <Box
      sx={{
        p: 1.2,
        borderRadius: 1.5,
        backgroundColor: '#f8fafc',
        border: '1px solid #e6e6e6',
        boxShadow: '0 1px 2px rgba(9, 30, 66, 0.1)',
      }}
    >
      <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}
      >
        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#172b4d' }}>
            {description}
        </Typography>
        <EditSquareIcon sx={{ fontSize: 16, color: '#5e6c84', ml: 0.5 }} />
      </Box>
    </Box>
  );
};

export default TaskCard;