let password = `bingbong`
let regex = /[a-zA-Z]/
let nums = /[0-9]/

if(password.length >= 10 && regex.test(password) && nums.test(password))
{
    console.log(`Success`)}
    else{
        console.log(`Fail`)
    }
// if(password === password.toUpperCase())
// {
//     console.log('Success')}
//     else{
//         console.log(`Fail`)
//     }