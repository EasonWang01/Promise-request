# Promise-request
Nodejs http module with promise

#Usage
```
npm install prore
```

then
```
import { post, get } from 'prore'
```

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
