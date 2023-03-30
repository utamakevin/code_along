when I type in http://github.com/epoch in the address bar and press enter, I am making a request.

when I click on repository link in the github page. I am making a request.

not just any request, but a http request.

every http request contains a path, a host and a method/verb.

http methods - get, post, put, delete, option


```
httpRequest = {
    method: 'get',
    host: 'github.com'
    path: '/epoch'
}
```

So, if you want to send a message to a http server you need to make a http request.

how can we make/create a http request?
    using a web browser.

within the browser, there are 3 ways to make a request
1. form
2. address bar
3. link/anchor