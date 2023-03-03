import fs from "fs";
import moment from "moment";
import cron from 'node-cron'

const dirPaths = [""]; // Choose directories here

async function deleteOldFiles() {
  try {
    console.table({report: 'Starting the removal process ~ 🕒'})
    dirPaths.forEach(dirPath => {
      const files = fs.readdirSync(dirPath);
      const today = moment();
      files.forEach(file => {
        const filePath = `${dirPath}/${file}`;
        const stats = fs.statSync(filePath);
        const fileCreatedDate = moment(stats.ctime);
        const diffInMonths = today.diff(fileCreatedDate, "months");
        if (diffInMonths) {
          fs.rmSync(filePath);
          return console.log(`File ${filePath} deleted successfully ~ 💾.`);
        }
      })
    });
    console.table({report: 'Completing the removal process ~ 🆗'})
  } catch (error: any) {
    console.log({ msg: 'deleteOldFiles error ~ X', report: error.message } );
  }
}

export default cron.schedule('*/10 * * * * *', deleteOldFiles, {
  scheduled: false,
  timezone: "America/Fortaleza"
});

// '0 0 * * *'
// -> Is removing every day at 00:00!

// # ┌────────────── second (optional)
// # │ ┌──────────── minute
// # │ │ ┌────────── hour
// # │ │ │ ┌──────── day of month
// # │ │ │ │ ┌────── month
// # │ │ │ │ │ ┌──── day of week
// # │ │ │ │ │ │
// # │ │ │ │ │ │
// # * * * * * *
