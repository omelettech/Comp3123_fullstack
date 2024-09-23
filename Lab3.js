let http = require("http");

let employees = require("./Employee.js")
console.log("Lab 03 -  NodeJs");
console.log("ID: 101400761")


//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== "GET") {
        res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    } else {
        if (req.url === '/') {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end("<h1>Welcome to lab exercise 3" +
                    "<br>" +
                    "Awsaf Fida Mahmud | 101400761" +
                    "</h1>")
        }

        if (req.url === '/employee') {
            res.setHeader('Content-Type', 'application/json;charset=utf-8')
            console.log(JSON.stringify(employees))
            res.end(JSON.stringify(employees))
        }

        if (req.url === '/employee/names') {
            const sortedEmployees = employees.sort((a, b) => {
                if (a.firstName < b.firstName) return -1;
                if (a.firstName > b.firstName) return 1;
                return 0;
            });
            res.setHeader('Content-Type', 'application/json;charset=utf-8')
            res.end(JSON.stringify(sortedEmployees.map((employee) => {
                return (employee.firstName + employee.lastName)
            })))


        }

        if (req.url === '/employee/totalsalary') {
            res.setHeader('Content-Type', 'application/json;charset=utf-8')
            res.end(JSON.stringify(employees.reduce((employee, currentValue, accumulator) => {
                return accumulator += currentValue.Salary
            })))
        }
        //res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})