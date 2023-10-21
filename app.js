const net = require("net");

const port = 5000;

const server = net.createServer((socket) => {
    console.log("Client connected");

    socket.on("data", (data) => {
        var strData = data.toString();
        var command = strData.split(':')
        var operand1 = command[1]
        var operand2 = command[2]
        switch (command[0]) {
            case '4':
                {
                    var result = 0;
                    //Ex 5
                    for (var i = 0; i < operand1.length; i++) {
                        result += parseInt(operand1.charAt(i));
                    }
                    socket.write(result.toString());
                }
                break;
            case '5':
                {
                    var sum = BigInt(operand1) + BigInt(operand2);
                    socket.write(sum.toString());
                }
                break;
            case '6':
                {
                    socket.write("Tong: " + (parseFloat(operand1) + parseFloat(operand2)).toString());
                    socket.write("\rTru: " + (parseFloat(operand1) - parseFloat(operand2)).toString());
                    socket.write("\rNhan: " + (parseFloat(operand1) * parseFloat(operand2)).toString());
                    socket.write("\rChia: " + (parseFloat(operand1) / parseFloat(operand2)).toString());
                }
                break;
            case '7':
                {
                    var result = factorialize(operand1)
                    socket.write(result.toString());
                }
                break;
        }
    });

    socket.on("end", () => {
        console.log("Client disconnected");
    });

    socket.on("error", (error) => {
        console.log(`Socket Error: ${error.message}`);
    });
});

server.on("error", (error) => {
    console.log(`Server Error: ${error.message}`);
});

server.listen(port, () => {
    console.log(`TCP socket server is running on port: ${port}`);
});

// function checkNT(n) {
//     if (n <= 1) return false;
//     for (var i = 2; i <= sqrt(n); i++)
//         if (n % i == 0)
//             return false;
//     return true;
// }

function giaiThua(n) {
    if (n == 1)
        return 1;
    return n * giaiThua(n - 1);
}

function factorialize(num) {
    // If the number is less than 0, reject it.
    if (num < 0)
        return -1;

    // If the number is 0, its factorial is 1.
    else if (num == 0)
        return 1;

    // Otherwise, call the recursive procedure again
    else {
        return (num * factorialize(num - 1));
    }
}