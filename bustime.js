require("dotenv").config({ path: "./config/.env" });

const BUSTIME_API_KEY = process.env.BUSTIME_API_KEY
const busRt = ['1', '2', '4', '6', '7', '8', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '24', '26', '27', '28X', '29', '31', '36', '38', '39', '40', '41', '43', '44', '48', '51', '51L', '52L', '53', '53L', '54', '55', '56', '57', '58', '59', '60', '61A', '61B', '61C', '61D', '64', '65', '67', '69', '71', '71A', '71B', '71C', '71D', '74', '75', '77', '79', '81', '82', '83', '86', '87', '88', '89', '91', '93', 'G2', 'G3', 'G31', 'O1', 'O12', 'O5', 'P1', 'P10', 'P12', 'P13', 'P16', 'P17', 'P2', 'P3', 'P67', 'P68', 'P69', 'P7', 'P71', 'P76', 'P78', 'Y1', 'Y45', 'Y46', 'Y47', 'Y49']
// console.log(busRt.length) // 96
const trolleyRt = ['BLUE', 'RED', 'SLVR']
const rtpi = ['Port%20Authority%20Bus', 'Light%20Rail']


function getBusStops() {
    let promiseArray = [];
    for(let i = 0; i < busRt.length; i++){
        promiseArray.push(fetch(`http://truetime.rideprt.org/bustime/api/v3/getstops?key=${BUSTIME_API_KEY}&rt=${busRt[i]}&rtpidatafeed=${rtpi[0]}&dir=OUTBOUND&format=json`))
        promiseArray.push(fetch(`http://truetime.rideprt.org/bustime/api/v3/getstops?key=${BUSTIME_API_KEY}&rt=${busRt[i]}&rtpidatafeed=${rtpi[0]}&dir=INBOUND&format=json`))
    }
        Promise.all(promiseArray)
            .then(values => values.map(value => console.log(value.url+" ==> "+value.status)))
            .catch(err => console.log(err))
        // console.log(`Listing route(s) ${busRt[i]} for the Bus`)

    

    // console.log(`Listing route(s) ${busRt[i]}`)
}

getBusStops()



function getTrolleyStops() {
    let promiseArray = []
    for(let i = 0; i < trolleyRt.length; i++){
        promiseArray.push(fetch(`http://truetime.rideprt.org/bustime/api/v3/getstops?key=${BUSTIME_API_KEY}&rt=${trolleyRt[i]}&rtpidatafeed=${rtpi[1]}&dir=OUTBOUND&format=json`))
        promiseArray.push(fetch(`http://truetime.rideprt.org/bustime/api/v3/getstops?key=${BUSTIME_API_KEY}&rt=${trolleyRt[i]}&rtpidatafeed=${rtpi[1]}&dir=INBOUND&format=json`))
    }
    
    Promise.all(promiseArray)
        .then(values => values.map(value => console.log(value.url+" ==> "+value.status)))
        .catch(err => console.log(err))

}


getTrolleyStops()



