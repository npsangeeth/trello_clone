import { Box, Button } from "@mui/material";

import Column from "../columns/Column";
import BoardHeader from "./components/Header";

import  projectData  from "../../shared/project_data/projectData";

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
        {projectData.columns.map((column) => (
          <Column key={column.column_id} title={column.column_title} tasks={column.tasks} />
        ))}
        <Button
          sx={{
            width: 280,
            textTransform: 'none',
            borderRadius: 2,
            boxShadow: '0px 2px 8px rgba(9, 30, 66, 0.15)',
            backgroundColor: '#f4f5f7',
            margin: 1,
            color: '#000000',
            fontWeight: 'bold',
            ":hover":{
              backgroundColor: '#fbd5d5',
            }
          }}
        >
          Add Another List
        </Button>
      </Box>
    </>
  );
};

export default Board;