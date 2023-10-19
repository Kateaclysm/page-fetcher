const argument = process.argv.slice(2);
const fs = require('fs');
const request = require('request')



dataFetch = (url, path) => {
  console.log(`Started....`);
  request(url, function(error, response, body) {
    if (error) {
      console.error(error);
    }
    console.log(`Writing to ${path}...`);

  setTimeout(() => {
    fs.writeFile(path, body, err => {
      if (err) {
        console.log(err);
      }
      console.log(`Success. Wrote content of ${url} to ${path}. Size: ${body.length} bytes.`)
    })
  }, 5000);
})
};

dataFetch(argument[0], argument[1]);