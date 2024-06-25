import { Card } from "@mui/material"

function MuiCard({children}) {
  return (
    <Card sx={{width:"300px"}}>
        {children}
    </Card>
  )
}

export default MuiCard