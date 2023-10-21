const net = require("net");

const host = "127.0.0.1";
const port = 5000;

const client = net.createConnection(port, host, () => {
    console.log("Connected");
    //bai 4
    //client.write(`4:456`);
    //bai 5
    client.write(`5:123456789123456789:123456789123456789`);
    //bai 6
    //client.write(`6:5.5:4.6`);
    //bai 7
    //client.write(`7:50`);


    // console.log("Choose your ex: ")
    // var commamd = prompt()
    // while (true) {
    //     switch (commamd) {
    //         case "4":
    //             {
    //                 client.write()
    //             }
    //     }
    // }
});

client.on("data", (data) => {
    console.log(`Received: ${data}`);
});

client.on("error", (error) => {
    console.log(`Error: ${error.message}`);
});

client.on("close", () => {
    console.log("Connection closed");
});