# pegroute

```
@as home
GET / = HomeController@index

@as expertPage
@where expertId \w+_\w+
GET /{expertId} = HomeController@index

@namespace ExpertControllers
@as experts
/experts {
  @as .index
  GET / = ExpertController@index
  
  @as .item
  @where id ~ \d+
  GET /{id} as .item = ExpertController@item
}

@as cabinet
@namespace CabinetControllers
/cabinet {
  
  @as .expert
  @uses auth;expert
  @namespace ExpertControllers
  /expert {
    
    @as .index
    GET / = ExpertController@index
    
    @as .orders
    GET /orders = ExpertController@orders
    
    @as .profile
    /profile {
      
      @as .index
      GET / = ExpertProfileController@index
    }
  }
  
  @as .client
  @uses auth
  @namespace ClientControllers
  /client {
    
    @as .index
    GET / = ClientController@index
    
    @as .orders
    GET / = ClientController@orders
    
    @as .profile
    GET / = ClientController@profile
  }
}
```
