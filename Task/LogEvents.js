const fsPromise = require('fs').promises
const uuid = require('uuid')
const fs = require('fs')
const path = require('path')
const date = require('date-fns')
 
const LogEvents= async (message) =>{
    const fs = require('fs').promises;
 
    const logevent = './logevent';
    fs.stat(logevent).catch(async (err) => {
     if (err.message.includes('no such file or directory')) {
        await fs.mkdir(logevent);
      }
    })

    createFile(message)
}
    
//      fs.writeFile(path.join(__dirname, 'logevent','logevent.txt'),'previously in the blacklist',(err) =>{
//         if(err) throw err
//         console.log('write complete')
//     });
    const createFile = async (message) => {
      try {
        const id= uuid.v4();
        const date= new Date();
        const LogItem = `${id}\t ${date}\t ${message}\n\n`
     
     
        const data = await fsPromise.appendFile(
          path.join(__dirname, "logevent", "logevent.txt"),
            LogItem
        );
       
      } catch (err) {
        console.log(err);
      }
    };
     
    module.exports = LogEvents;

    
 
 