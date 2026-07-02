import { Box } from "@mui/material";
import Column from "../columns/Column";
import BoardHeader from "./components/Header";

const cardDataByColumn = [
  [
    { id: 1, title: 'Task 1', description: 'Plan the sprint backlog' },
    { id: 2, title: 'Task 2', description: 'Review UI updates' },
  ],
  [
    { id: 3, title: 'Task 3', description: 'Fix navigation issue' },
    { id: 4, title: 'Task 4', description: 'Handle API response' },
    { id: 5, title: 'Task 5', description: 'Write test cases' },
    { id: 6, title: 'Task 6', description: 'Polish empty states' },
  ],
  [
    { id: 7, title: 'Task 7', description: 'Prepare release notes' },
  ],
  [
    
  ]
];

const Board = () => {
  return (
    <>
      <BoardHeader />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#e5e5e5',
          height: '100%',
          alignItems: 'flex-start',
          p: 1,
        }}
      >
        {cardDataByColumn.map((cards, index) => (
          <Column key={index + 1} title={`Column ${index + 1}`} cards={cards} />
        ))}
      </Box>
    </>
  );
};

export default Board;