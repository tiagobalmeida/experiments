console.log(process.argv.slice(2, process.argv.length).reduce( (acc,x) => (0 + acc + Number(x)), 0))
