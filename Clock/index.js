// setInterval(() => {
//     d = new Date();
//     htime = d.getHours();
//     mtime = d.getMinutes();
//     stime = d.getSeconds();

//     hrotation = 30*htime + mtime;
//     mroation = 6*mtime;
//     sroation = 6*stime;


//     getHours.style.transform = `rotate(${hrotation}deg)`
//     getMinutes.style.transform = `rotate(${mrotation}deg)`
//     getSeconds.style.transform = `rotate(${srotation}deg)`

// }, 1000);

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);