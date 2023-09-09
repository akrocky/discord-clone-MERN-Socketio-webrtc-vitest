 const connectedUsers= new Map();



 const addNewConnectedUser= ({socketId,userId})=>{
    connectedUsers.set(socketId,{userId});
    console.log(connectedUsers);
 }
 const removeConnectedUser =(socketId)=>{
    if (connectedUsers.has(socketId)) {
      connectedUsers.delete(socketId);
      console.log("after dissconnect",connectedUsers)
    }
 }


 module.exports={
    addNewConnectedUser,
    removeConnectedUser,
    connectedUsers
 }