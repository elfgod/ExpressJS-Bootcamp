## Networking

-- http and tcp/ udp  
 -- stateless  
 -- conectionless  
 -- flexible  
 -- HTTP message

- start line  
  --- req: GET /blog HTTP/1.1  
  --- res: HTTP/1.1 200 OK
- headers  
  --- {key:values}  
  ---- content-type: text/html  
  ---- content-type: application/json  
  ---- Cache-Control: public, max-age=0  
  ---- Date: Fri, 21 Jun 2022 16:00:00 GMT  
  -- BLANK LINE
- body  
  --- STUFF - HTML, 4K video (binary), image

## Node Server

- write headers
- write body
- used the fs module
- close connection
- server.listen(port) 65000 ports
- req, res OBJECTS

## Express version

- Express is nodejs
- app == express() === createApplication()
- server.listen ---> app.listen
- router
- app.get, app.post, app.put, app.delete, etc
- served up static files, with express.static() middleware

## 201

- Middleware = is any function that has access to req, res and next
- networking on the outside, node/express development on the inside
- app.use, anytime you see a callback/function (req, res, next) =>
- next() is the way to move a piece of middleware forward
- express.json() -- body-parser
- express.urlencoded() -- body-parser
- helmet() -- 3rd party module for security, prevents attacks from headers and more
- req.ip - contains requesters ip
- req.path - contains the requested path
- req.body - parsed data

Response

- res.send(.end()) - send text/html
- res.sendFile - send a file
- res.locals - is available through the res
- res.json(jsonp) - send json back as application/json
