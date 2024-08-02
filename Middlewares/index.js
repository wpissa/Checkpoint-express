const verify = (req,res,next)=>{ 
    const date = new Date
    const heure = date.getHours()
    const jour = date.getDay()
    console.log(heure, jour);
    if ((jour >= 1 && jour <= 5) && (heure >= 9 && heure <= 17)) {
        next();
    } else {
        res.send("Le site est fermé");
    }

}

module.exports = verify
