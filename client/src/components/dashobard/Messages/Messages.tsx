import { styled } from "@mui/material"
import MessagesHeader from "./MessagesHeader"

import SingleMessage from "./SingleMessage"
import DateSeparator from "./DateSeparator";
const MainContainer= styled('div')({
  height:'calc(100% - 60px)',

  overflow:'auto',
  display:'flex',
  flexDirection:'column',
  alignItems:'center'
});
const convertDateToHumanReadable = (date, format) => {
  const map = {
    mm: date.getMonth() + 1,
    dd: date.getDate(),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear(),
  };

  return format.replace(/mm|dd|yy|yyy/gi, (matched) => map[matched]);
};
const Messages = ({choosenChatDetails, messages}) => {
  return (
   <MainContainer>
    <MessagesHeader  name={choosenChatDetails?.name}/>
    {
     messages.map((message, index)=>{
      const sameAuthor= index > 0 && messages[index].author._id === messages[index-1].author._id;
     const sameDay= index > 0 && convertDateToHumanReadable( new Date(message.date),"dd/mm/yy")=== convertDateToHumanReadable( new Date(messages[index-1].date), "dd/mm/yy");
    
      return(
        <div key={message._id} style={{width:"97%"}}>
          {
            (!sameDay || index === 0) && (
              <DateSeparator 
              date={convertDateToHumanReadable(
                new Date(message.date),
                "dd/mm/yy"
              )}
              />
            )
          }
        <SingleMessage content={message.content}   username={message.author.username}
        sameAuthor={sameAuthor}
        date={convertDateToHumanReadable(
          new Date(message.date),
          "dd/mm/yy"
        )}
        sameDay={sameDay}
        />
        </div>
      )
     })
    }
   </MainContainer>
  )
}

export default Messages