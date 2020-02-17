function fun1()
{
    return new Promise(function(resolve, reject)
    {
        setTimeout(()=>{
            const error=true;
            if(!error)
            {
                console.log("Function: your promise has been resolved");
                resolve();
            }
            else{
                console.log('function: your promise not resolved');
                reject('sorry not fullfilled')
            }
        },2000);
    })
}
    fun1().then(function()
        {
            console.log("Harry Thanks for resolved");
        }).catch(function(error)
        {
            console.log("Harry: very bad bro");
        })
