'use strict';
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var Controller = require('./controller').default;
/**
 * @class         Passes Router
 * @module        Users
 // curl -X GET http://localhost:3000/users/2
 // curl -X POST -d "name=flops&description=sandals&price=12.00" http://localhost:3000/users
 // curl -X PUT -d "name=flipflops&description=sandals&price=12.00" http://localhost:3000/users/3
 // curl -X DELETE http://localhost:3000/users/2
 * @constructor
 */
var Router = (function () {
    function Router(app) {
        console.log('Router Constructor');
        var controller = new Controller();
        var router = express();
        router.use(controller.use);
        router.all('/passes/*', controller.all);
        router.get('/passes/:id?', controller.get_route);
        router.delete('/passes/:id', controller.delete_route);
        router.post('/passes', bodyParser.json(), controller.post_route);
        router.put('/passes/:id', bodyParser.json(), controller.put_route);
        router.use(bodyParser.json());
        app.use('/', router);
    }
    return Router;
}());
exports["default"] = Router;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMvcGFzc2VzL3JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMxQyxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ25EOzs7Ozs7OztHQVFHO0FBQ0g7SUFDSSxnQkFBWSxHQUFXO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUVsQyxJQUFNLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ3BDLElBQU0sTUFBTSxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBRXpCLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDaEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ3JELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDaEUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUVsRSxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRzlCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQW5CRCwyQkFtQkMsQ0FBQSIsImZpbGUiOiJwbHVnaW5zL3Bhc3Nlcy9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5jb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xuY29uc3QgQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vY29udHJvbGxlcicpLmRlZmF1bHQ7XG4vKipcbiAqIEBjbGFzcyAgICAgICAgIFBhc3NlcyBSb3V0ZXJcbiAqIEBtb2R1bGUgICAgICAgIFVzZXJzXG4gLy8gY3VybCAtWCBHRVQgaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXJzLzJcbiAvLyBjdXJsIC1YIFBPU1QgLWQgXCJuYW1lPWZsb3BzJmRlc2NyaXB0aW9uPXNhbmRhbHMmcHJpY2U9MTIuMDBcIiBodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlcnNcbiAvLyBjdXJsIC1YIFBVVCAtZCBcIm5hbWU9ZmxpcGZsb3BzJmRlc2NyaXB0aW9uPXNhbmRhbHMmcHJpY2U9MTIuMDBcIiBodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlcnMvM1xuIC8vIGN1cmwgLVggREVMRVRFIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2Vycy8yXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihhcHA6ZXhwcmVzcykge1xuICAgICAgICBjb25zb2xlLmxvZygnUm91dGVyIENvbnN0cnVjdG9yJyk7XG5cbiAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKCk7XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGV4cHJlc3MoKTtcblxuICAgICAgICByb3V0ZXIudXNlKGNvbnRyb2xsZXIudXNlKTtcbiAgICAgICAgcm91dGVyLmFsbCgnL3Bhc3Nlcy8qJywgY29udHJvbGxlci5hbGwpO1xuICAgICAgICByb3V0ZXIuZ2V0KCcvcGFzc2VzLzppZD8nLCBjb250cm9sbGVyLmdldF9yb3V0ZSlcbiAgICAgICAgcm91dGVyLmRlbGV0ZSgnL3Bhc3Nlcy86aWQnLCBjb250cm9sbGVyLmRlbGV0ZV9yb3V0ZSlcbiAgICAgICAgcm91dGVyLnBvc3QoJy9wYXNzZXMnLCBib2R5UGFyc2VyLmpzb24oKSwgY29udHJvbGxlci5wb3N0X3JvdXRlKVxuICAgICAgICByb3V0ZXIucHV0KCcvcGFzc2VzLzppZCcsIGJvZHlQYXJzZXIuanNvbigpLCBjb250cm9sbGVyLnB1dF9yb3V0ZSlcblxuICAgICAgICByb3V0ZXIudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcblxuXG4gICAgICAgIGFwcC51c2UoJy8nLCByb3V0ZXIpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
