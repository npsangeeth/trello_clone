import { useState } from 'react';
import { Card, CardActions, CardHeader, Button, Box, Typography } from '@mui/material';
import TaskCard from './components/TaskCard';
import AddCard from './components/AddCard';

type SubTask = {
  sub_task_id: number;
  sub_task_title: string;
  sub_task_description: string;
  sub_task_status: string;
};

type CardItem = {
  task_id: number;
  task_title: string;
  task_description: string;
  sub_tasks: SubTask[];
};

type ColumnProps = {
  title: string;
  tasks?: CardItem[];
};


const Column = ({ title, tasks = [] }: ColumnProps) => {
  const [isAddingCard, setIsAddingCard] = useState(false);
  return (
    <Card
      sx={{
        width: 280,
        margin: 1,
        borderRadius: 2,
        boxShadow: '0px 2px 8px rgba(9, 30, 66, 0.15)',
        backgroundColor: '#f4f5f7',
        alignSelf: 'flex-start',
      }}
    >
      <CardHeader title={title} sx={{ pb: 1 }} />

      <Box sx={{ px: 2, pb: 1.5 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1.2,
            p: 1.2,
            borderRadius: 2,
            backgroundColor: '#ffffff',
            border: '1px solid #dfe1e6',
            minHeight: tasks.length ? 'auto' : 56,
          }}
        >
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskCard key={task.task_id} description={task.task_description} />
            ))
          ) : (
            <Typography variant="body2" sx={{ color: '#5e6c84' }}>
              No tasks yet
            </Typography>
          )}
          { isAddingCard && <AddCard setIsAddingCard={setIsAddingCard}/>}

        </Box>
      </Box>

    
      { !isAddingCard && 
        <CardActions>
          <Button
            sx={{
              width: '100%',
              borderRadius: 2,
              textTransform: 'none',
            }}
            variant="contained"
            onClick={() => setIsAddingCard(true)}
          >
            Add Card
          </Button>
        </CardActions>
      }   
    </Card>
  );
};

export default Column;