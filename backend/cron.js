import cron from 'cron'
import https from 'https'

const URL = "https://tonic.saurabhparyani.dev"

const job = new cron.CronJob('*/10 * * * *', function(){
    https.get(URL, (res) => {
        if (res.statusCode == 200){
            console.log('Request sent successfully!')
        } else {
            console.log('Request failed', res.statusCode)
        }
    }).on("error", (e) => {
        console.error("Error while sending request", e)
    })
})

export default job;