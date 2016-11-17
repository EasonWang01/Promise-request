# Promise-request
Nodejs http module with promise

```
	 post({
		 host: 'localhost',
		 port: '3001',
		 path: '/test'
	 },'hi')
	 .then(function(data){
		 console.log(data)
	 })
```

```
	 get({
		 host: 'localhost',
		 port: '3001',
		 path: '/test'
	 },'hi')
	 .then(function(data){
		 console.log(data)
	 })
```

```
	 post({
		 host: 'localhost',
		 port: '3001',
		 path: '/test'
     headers: {
       'Content-Type': 'multipart/form-data',
     }
	 },'hi')
	 .then(function(data){
		 console.log(data)
	 })
```
