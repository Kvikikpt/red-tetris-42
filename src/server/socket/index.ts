// @ts-ignore
const {db} = require('../db/index');
const uuid = require('uuid');
const md5 = require('md5');

// @ts-ignore
function auth(socket: any) {
  socket.on('register', (data: any) => {
    db.all("SELECT distinct name from users", function(err: any, rows: any) {
      if (!err) {
        let names = rows.map((item: any) => item.name);
        if (names.indexOf(data.name) !== -1) {
          socket.emit('name_taken_register');
        }
      }
    });
    const {name, password} = data;
    let hash = md5(password);
    let id = uuid.v1();
    db.run(`insert into users (id, name, password) values ('${id}', '${name}', '${hash}')`)
    socket.emit('success_login', id);
  });

  socket.on('login', (data: any) => {
    const {name, password} = data;

    let hash = md5(password);
    db.get(`SELECT id, name, password from users
    where name = '${name}' and password = '${hash}'`, function(err: any, row: any) {
      if (!err) {
        if (row) {
          socket.emit('success_login', row.id);
        }
        else {
          socket.emit('unsuccessful_login')
        }
      }
    });
  })
}

module.exports = {
  auth
}
