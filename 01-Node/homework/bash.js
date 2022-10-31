    const commands = require('./commands')

    const print = function(output) {
        process.stdout.write(output)
        process.stdout.write('\nprompt > ')
    }

    // Output un prompt
    process.stdout.write('prompt > ');
    // El evento stdin 'data' se dispara cuando el user escribe una línea
    process.stdin.on('data', function(data) {

        // "echo hola que tal"
        // arg = ['echo', 'hola', 'que', 'tal']
        let args = data.toString().trim().split(); // remueve la nueva líne
        // arg = ['echo', 'hola', 'que', 'tal']
        let cmd = args.shift(); // 'echo' 
        // arg = ['hola', 'que', 'tal']

        if (commands[cmd]) {
            commands[cmd](args, print);
        } else {
            // 'command not found'
            print('cmd not found')
        }


        // if (cmd === 'echo') {
        //     process.stdout.write(args.join());
        // } else if (cmd === 'ls') {

        // } else if (cmd === 'pwd') {

        // } else if (cmd === 'date') {

        // } else {
        //     process.stdout.write('command not found')
        // }
        // process.stdout.write('\nprompt > ');
    });