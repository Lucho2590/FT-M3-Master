const fs = require('fs');
let request = require('request');


module.exports = {
    echo: function(args, print) {
        print(args.join(''));
    },
    date: function(args, print) {
        print(Date());
    },
    ls: function(args, print) {
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            print(files.join('\n'))
                // files.forEach(function(file) {
                //     process.stdout.write(file.toString() + "\n");
                // })
                // process.stdout.write("prompt > ");
        });
    },
    pwd: function(args, print) { // PWD= Print working directory
        print(process.cwd());
    },
    cat: function(args, print) {
        fs.readFile(args[0], 'utf8', function(err, data) {
            if (err) throw err;
            print(data);
        });
    },
    head: function(args, print) {
        fs.readFile(args[0], 'utf8', function(err, data) {
            if (err) throw err;
            print(data.split('\n').splice(0, args[10]).join('\n'))
        })
    },
    tail: function(args, print) {
        fs.readFile(args[0], 'utf8', function(err, data) {
            if (err) throw err;
            print(data.split('\n').splice(-args[10]).join('\n'))
        })
    },
    curl: function(args, print) {
        request(args[0], function(err, data) {
            if (err) throw err;
            print(data.body);
        })
    },
}