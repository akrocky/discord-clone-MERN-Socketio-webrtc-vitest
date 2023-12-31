import { Box, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import Avatar from "../shared/Avatar";
import InvitaionDecisionButtons from "./InvitaionDecisionButtons";
import { acceptFriendInvitaion, rejectFriendInvitaion } from "../../store/actions/friendAction";
import { useAppDispatch } from "../../hooks/useStore";

const PendingInvitaionListItem = ({id,username,mail}) => {

    const [buttonDisabled, setButtonDisabled]= useState(false);
    const dispatch= useAppDispatch()
    const handleAcceptInvitaion=()=>{
     
        
        acceptFriendInvitaion({id},dispatch);
        setButtonDisabled(true);
    }
    const handleRejectInvitaion=()=>{
        rejectFriendInvitaion({id},dispatch);
        setButtonDisabled(false);
    }

  return (
    <Tooltip title={mail}>
     <div style={{width:'100%'}}>
<Box sx={{
    width: '100%',
    height: '42px',
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}}>
    <Avatar  username={username}/>
    <Typography
    sx={{
        marginLeft: '7px',
        fontWeight: 700,
        color: '#8e9297',
        flexGrow:1
    }}
    variant="subtitle1">{username}</Typography>
    <InvitaionDecisionButtons
disabled={buttonDisabled}
accecptInviationHandler= {handleAcceptInvitaion}
rejectInvitaionHandler= {handleRejectInvitaion}
/>
</Box>


     </div>
    </Tooltip>
  )
}

export default PendingInvitaionListItem