function timeCall() {
    let d = new Date();
    let print_time = d.toLocaleTimeString();;
    console.log(print_time);
}
let time = setInterval(timeCall, 1000);
setTimeout(() => { clearInterval(time); console.log("done"); }, 5000);