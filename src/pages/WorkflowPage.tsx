import Board from "../features/boards/Board"
import WorkflowHeader from "../features/workflowHeader/WorkflowHeader"
import { Box } from "@mui/material"

const WorkflowPage = () => {
  return (
        <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
        >
            <WorkflowHeader/>
            <Board/>
        </Box>
  )
}

export default WorkflowPage