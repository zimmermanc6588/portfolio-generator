const profileDateArgs = process.argv.slice(2, process.argv.length);
console.log(profileDateArgs);

const printProfileData = (profileDateArr) => {
    for (let i = 0; i < profileDateArr.length; i += 1) {
    console.log(profileDateArr[i]);
    }

    console.log('================');


profileDataArr.forEach(profileItem => console.log(profileItem));
