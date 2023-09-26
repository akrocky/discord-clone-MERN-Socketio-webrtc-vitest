import { Typography, styled } from "@mui/material"
import Avatar from "../../shared/Avatar"

const MainContainer=styled('div')({
    width:'98%',
    display:'column',
    marginTop:'10px'
})

function MessagesHeader({name}) {
  return (
    <MainContainer>
        <Avatar large username={name} />
        <Typography
        variant="h4"
        sx={{
            fontWeight: 'bold',
            color:'white',
            marginLeft:'5px',
            marginRight:'5px'
        }}
        >
   {name}
        </Typography>
        <Typography
       
        sx={{
           
            color:'#b9bbbe',
            marginLeft:'5px',
            marginRight:'5px'
        }}
        >
   This is the beginning of  your conversation with{name}
        </Typography>
    </MainContainer>
  )
}

export default MessagesHeader