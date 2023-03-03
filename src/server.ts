import managerCron from './services/managerCron'

managerCron.run();


// .then(() => console.table({report: 'This service is running 🟢', time: moment(time).format('DD/MM/YYYY')}))
// .catch(() => console.table({report: 'This service is broken 🔴', time: moment(time).format('DD/MM/YYYY')}))