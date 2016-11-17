# Promise-request
Nodejs http module with promise

```javascript
	 post({
	   host: 'localhost',
	   port: '3001',
	   path: '/test'
	 },'hi')
	 .then(function(data){
	   console.log(data)
	 })
```

```javascript
	 get({
	   host: 'localhost',
           port: '3001',
	   path: '/test'
	 },'hi')
	 .then(function(data){
	   console.log(data)
	 })
```

```javascript
	 post({
	   host: 'localhost',
	   port: '3001',
	   path: '/test'
           headers: {
             'Content-Type': 'multipart/form-data',
           }
	 },'I am data')
	 .then(function(data){
	   console.log(data)
	 })
```
