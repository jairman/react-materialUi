import { Alert, AlertTitle, Box, Button } from "@mui/material";

export const Home = () => {
  return (
    <>
      <Box sx={{ display: "grid", gap:"1rem" }}>
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            
            This is an error alert — check it out!</Alert>

        <Alert 
            severity="warning"
            action={
                <>
                    <Button color="inherit" >Update</Button>
                    <Button color="inherit" >Delete</Button>
                </>
            }
        >
            This is a warning alert — check it out!</Alert>
        <Alert severity="info">This is an info alert — check it out!</Alert>
        <Alert severity="success">This is a success alert — check it out!</Alert>
      </Box>
    </>
  );
};
