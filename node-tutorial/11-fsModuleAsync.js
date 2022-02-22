const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => { // reads file if exists, logs error if no & returns null, assigns result text to first
    if (err) {
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/subcontent/second.txt', 'utf8', (err, result) => { // nested readfile content, same philosophy as first readfile
        if(err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt', 
            `An async writeFile created in 11-fsModuleAsync.js with appended text: ${first} and ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return
                }
                console.log(result);
            }
        ) // writes both resulting strings from read files to new file in content folder
    })
})