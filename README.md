# 首页

1. banner 图片list
   | 字段     | 类型   |
   | -------- | ------ |
   | imageSrc | string |
   | id       | string |


get 接口
/api/banner
```json
return body

{
    "image_list": [
       {
           "imgSrc": "https://xxxx",
           "img_desc": "xxxxx",
           "id": "1111"
       },
       {
           "imgSrc": "https://xxxx",
           "img_desc": "xxxxx",
           "id": "1111"
        },
        {
           "imgSrc": "https://xxxx",
           "img_desc": "xxxxx",
           "id": "1111"
       }
    ]
}

```

2. 数组list
   
   | 字段       | 类型        |
   | ---------- | ----------- |
   | imgSrc     | string      |
   | author     | string      |
   | avarorSrc  | string      |
   | star       | string      |
   | isStar     | boolean     |
   | meta_title | string      |
   | price      | number(Int) |
   | last_price | number(Int) |
   | id         | stirng      |



get 接口
/api/nfts?page=1
```json
return body

{
    "total": 123,
    "page": 1,
    "size": 8,
    "list": [
       {
           "imgSrc": "https://xxxx",
           "author": "xxxx",
           "author_src": "https://xxxx",
           "star": "123",
           "is_star": false,
           "meta_title": "xxxx",
           "price": 123,
           "last_price" 123,
           "id": "1111",
       },
       {
           "imgSrc": "https://xxxx",
           "author": "xxxx",
           "author_src": "https://xxxx",
           "star": "123",
           "is_star": false,
           "meta_title": "xxxx",
           "price": 123,
           "last_price" 123,
           "id": "1111",
        },
        {
           "imgSrc": "https://xxxx",
           "author": "xxxx",
           "author_src": "https://xxxx",
           "star": "123",
           "is_star": false,
           "meta_title": "xxxx",
           "price": 123,
           "last_price" 123,
           "id": "1111",
       }
    ]
}

```


# 登录页面

## login

POST
/api/login
```json
request

    {
        "email": "xxxxx@xxx",
        "password": "xxxxxx",
    }
```

return 

```json
{
    "name": "Juice",
    "email": "xxxx",
    "userid": "xxxx",
    "avator": "https://xxx"
}
```

## register

POST 接口
/api/register
```json
    {   
        "avator"  : "data:image/png;base64,xxxxxxxx",
        "name"    : "xxxx",
        "email"   : "xxxxx@xxx",
        "password": "xxxxxx",
		"address" : "xxxxxx"
    }
```

return 

```json
{
    "name"    : "Juice",
    "email"   : "xxxx",
    "userid"  : "xxxx",
    "avator"  : "https://xxx",
	"address" : "xxxxxx"
}
```

# MY COLLECTION 页面

## 初始化获取

GET接口 
```json
/api/collection?type=collection&page=1&size=10&userid=xxxxxx
```

返回参数
```json
{	
	"code": 200,    // 200 means ok, 100 means relogin
	"data" : {
		"collection": {
			"total": 120,
			"page": 1,
			"size": 20,
			"list": [
				{
				  "imgSrc": "https://xxxx",
				  "author": "xxxx",
				  "author_src": "https://xxxx",
				  "star": "123",
				  "is_star": false,
				  "meta_title": "xxxx",
				  "price": 123,
				  "last_price" 123,
				  "id": "1111",
			   },
			   {
				  "imgSrc": "https://xxxx",
				  "author": "xxxx",
				  "author_src": "https://xxxx",
				  "star": "123",
				  "is_star": false,
				  "meta_title": "xxxx",
				  "price": 123,
				  "last_price" 123,
				  "id": "1111",
			   },
			]
		},
		"created": {
			"total": 120,
			"list": [], 
		},
		"favorited": {
			"total": 12,
			"list": [], 
		},
	}
}

```

## tab切换

GET 接口
```json
/api/collection?type=created&page=1&size=10&userid=xxxxxx
```

返回参数
```json
{	
	"code": 200,    // 200 means ok, 100 means relogin
	"data" : {
		"created": {
			"total": 120,
			"page": 1,
			"size": 20,
			"list": [
				{
				  "imgSrc": "https://xxxx",
				  "author": "xxxx",
				  "author_src": "https://xxxx",
				  "star": "123",
				  "is_star": false,
				  "meta_title": "xxxx",
				  "price": 123,
				  "last_price" 123,
				  "id": "1111",
			   },
			   {
				  "imgSrc": "https://xxxx",
				  "author": "xxxx",
				  "author_src": "https://xxxx",
				  "star": "123",
				  "is_star": false,
				  "meta_title": "xxxx",
				  "price": 123,
				  "last_price" 123,
				  "id": "1111",
			   },
			]
		},
		"collection": {
			"total": 120,
			"list": [], 
		},
		"favorited": {
			"total": 12,
			"list": [], 
		},
	}
}

```

GET 接口
```json
/api/collection?type=favorited&page=1&size=10&userid=xxxxxx
```

返回参数
```json
{	
	"code": 200,    // 200 means ok, 100 means relogin
	"data" : {
		"favorited": {
			"total": 120,
			"page": 1,
			"size": 20,
			"list": [
				{
				  "imgSrc": "https://xxxx",
				  "author": "xxxx",
				  "author_src": "https://xxxx",
				  "star": "123",
				  "is_star": false,
				  "meta_title": "xxxx",
				  "price": 123,
				  "last_price" 123,
				  "id": "1111",
			   },
			   {
				  "imgSrc": "https://xxxx",
				  "author": "xxxx",
				  "author_src": "https://xxxx",
				  "star": "123",
				  "is_star": false,
				  "meta_title": "xxxx",
				  "price": 123,
				  "last_price" 123,
				  "id": "1111",
			   },
			]
		},
		"collection": {
			"total": 120,
			"list": [], 
		},
		"created": {
			"total": 12,
			"list": [], 
		},
	}
}
```


# 商品接口 ()

GET接口
```json
/api/shop_detail?shopid=xxxxxx
```
返回参数
```json
{
	"author"        : "author",
    "author_src"    : "https://xxxxxxx",
    "shop_title"    : "Name of the item",
    "views"         : 20004, // 浏览量
    "star"          : 20, // 点赞量
    "price"         : 12370,
    "nfts_price"    : "0.8",
    "image_src"     : "https://xxxxxx"
	"make_an_offer" : "http://xxx"
	
	"nft_data"      : {
					  properties: "xxx",
					  "author"  : "xxxxxxxxxxxxxx",
					  "details  : {
									"token_id"     : "xxxxxx",
									"token_type"   : "xxxxxx",
									"blockchain"   : "xxxxxx",
									"contract"     : "xxxxxx"
									}
	                },
	"roblox"        : {
	                   "roblox_data"  : {
										"try_on_data"   : [1,23,4,5,6,7,8,9 ...], //服装试穿数据
										"purchase_data" : [1,23,4,5,6,7,8,9 ...], //服装购买数据
										"outfit_data"   : [1,23,4,5,6,7,8,9 ...], //道具购买数据
									   }，
						"description" : "xxxxxx",
						"comments"    : ["xxx", "xxx"]
					},
	
	"trading_info"  : {
					  "price_history" : [
											{
												"price": 123,
												"date" : "xxx"
											},
											{
												"price": 123,
												"date" : "xxx"
											}
										],
					  "list_history"  : [
											{
												"unit_price"     : 123  ,
												"usd_unit_price" : 1234 ,
												"quantity"       : 10   ,
												"expiration"     : "xxx",
												"from"           : "xxx"
											},
											{
												"unit_price"     : 123  ,
												"usd_unit_price" : 1234 ,
												"quantity"       : 10   ,
												"expiration"     : "xxx",
												"from"           : "xxx"
											}
										],
					  "offer_history" : [
											{
												"unit_price"      : 123  ,
												"usd_unit_price"  : 1234 ,
												"quantity"        : 10   ,
												"floor_difference": "xxx",
												"expiration"      : "xxx",
												"from"            : "xxx"
											},
											{
												"unit_price"      : 123  ,
												"usd_unit_price"  : 1234 ,
												"quantity"        : 10   ,
												"floor_difference": "xxx",
												"expiration"      : "xxx",
												"from"            : "xxx"
											}
										],
					  "item_activity" : [
											{
												"event"           : "xxx"
												"unit_price"      : 123  ,
												"quantity"        : 10   ,
												"from"            : "xxx",
												"to"              : "xxx",
												"date"            : "xxx"
											},
											{
												"event"           : "xxx"
												"unit_price"      : 123  ,
												"quantity"        : 10   ,
												"from"            : "xxx",
												"to"              : "xxx",
												"date"            : "xxx"
											}
										]
	                }
	 
}
```





# 其余接口，暂时先定，后期会增加

## 1. 获取用户信息
GET接口

用来在其他页面通过userid 获取用户所有信息

> 此处说明，userid可以理解为token，当用户登录成功之后，后端需要返回给我这个token，我每次使用这个token去获取该用户和该用户有关的所有信息，当后端判断登录过期，则这个token失效，此时其余需要这个token的接口都返回重新登录，此时跳往登录页面

```json
/api/get_user?userid=xxxxxx
```

返回参数
```json
{	
	"code": 200,    // 200 means ok, 100 means relogin
	"data" : {
    "name":"Juice",
    "avatar":"https://xxxxx",
    "email": "xxxxxxxx",

	}
}
```

## 2. 修改用户密码
POST接口
```json
/api/edit_password
```

return

```json
{	
	"code": 200,    // 200 means ok, 100 means relogin, 404 means invalid args
	"data" : {
    "userid": "xxxx",
    "old_password":"xxxx",
    "new_password": "xxxx",
	}
}
```

## 3. 修改用户信息

POST接口

```json
/api/edit_user
```

return

```json
{	
	"code": 200,    // 200 means ok, 100 means relogin
	"data" : {
    "userid": "xxxx",
    "email":"xxxx", // 非必传
    "name": "xxxx", // 非必传
	}	
}
```




#  API用途

## api文件

```
src/api/api.js
```

具体传参参考顶部API文档

## 首页

### 获取banner接口
```
/api/banner
```

### 获取nfts接口
```
/api/nfts
```

### 添加favorited

```
/api/favorited
```

### 注释

> getServerSideProps获取banner，因为nfts在登录之后会传递userid，因此在代码的**useEffect**中进行接口请求

## COLLECTION 页面

### 获取用户信息接口

```
/api/get_user
```

### 获取collection

```
/api/collection
```

> 本地存储了user的userid 也就是后端tokenid，当过期返回100，重定向到login页面

## DETAIL 页面

```
/api/shop_detail
```

获取详情信息

## LOGIN 页面

### 登录

```
/login
```

### 注册

```
/register
```

## PROFILE 页面

### 更新密码和邮箱等
```
/api/edit_password
```
```
/api/edit_user
```

## NFTS 页面


### 获取nfts接口
```
/api/nfts
```

## ACTIVIATION 页面

### 邮箱激活接口

```
/api/activate_user
```


# 修改方式

通过`src/api/api.js`文件中的文件名，可以快速定位到页面中使用的地方，后期增加字段要同步在页面和`src/api/api.js`中同步增加
