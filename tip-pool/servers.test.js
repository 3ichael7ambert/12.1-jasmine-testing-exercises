describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterEach(function() {    
    serverNameInput.value = '';
  serverId = 0;
  serverTbody.innerHTML = '';
  allServers = {};
  });
});



describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Mikey';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Mikey');
  });

  afterEach(function() {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});


// describe("Servers test (with setup and tear-down)", function() {
//   beforeEach(function () {
//     // initialization logic
//     serverNameInput.value = 'Mikey';
//   });

//   it('should add a new server to allServers on submitServerInfo()', function () {
//     submitServerInfo();

//     expect(Object.keys(allServers).length).toEqual(1);
//     expect(allServers['server' + serverId].serverName).toEqual('Mikey');
//   });

//   afterEach(function() {
//     // serverNameInput.
//   });
// });



///list of functions
/////////
/*
submitServerInfo(evt)
updateServerTable()
*/

// describe("Testing All servers", function() {
//   beforeEach(function () {
//     let allSer = allServers;
//     allServers.push="Mikey";
//   });

//   it('', function () {
//     expect(allSer.length).value(allServers+1);
//   });

//   afterEach(function() {
//     // teardown logic
//   });
// });




///
//boiler plate
///
// describe('', function() {

//   it('', function() {
//     expect( ()).toEqual();
//   });
// });



describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    serverNameInput.value = 'Michael';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Michael');
  });

  it('check if empty, should not add server', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  // it('should update #servertable on updateServerTable()', function () {
  //   submitServerInfo();
  //   updateServerTable();

  //   let curTdList = document.querySelectorAll('#serverTable tbody tr td');

  //   expect(curTdList.length).toEqual(2);
  //   expect(curTdList[0].innerText).toEqual('Michael');
  //   expect(curTdList[1].innerText).toEqual('$0.00');
  //   expect(curTdList[2].innerText).toEqual('X');
  // });

  afterEach(function() {
    //reset table and values
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});