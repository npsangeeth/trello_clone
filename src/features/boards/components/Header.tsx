import { AppBar, Toolbar, Typography } from "@mui/material"

const BoardHeader = () => {
  return (
     <AppBar 
        position="static"
        sx={{
            backgroundColor: '#394173',
            color: '#fff'
        }}
    >
      <Toolbar
        variant="dense"
        sx={{
         display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center'
        }}
      >
        <Typography variant="h6" >
            Project Board
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
export default BoardHeader;