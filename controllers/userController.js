const sendEmail=require('../utils/email')
const userDal=require('../dal/usersDal')
class UserController{
     
     // פונקציה תעבוד כל חודש
   SendingReminderEmailToUsers=async()=>{
    const emails=await userDal.findAllUsersEmail();
    const subject='A reminder for your registration on the kidney matching site'
    const text='We are progressing towards another compatibility check. If you want to change details, we will be happy if you update this link'
    // link=
    sendEmail(text,subject,emails.toString())
        // sendEmail(text,subject,'36325608008@mby.co.il')

} 
}



const userController = new UserController();
module.exports = userController;



