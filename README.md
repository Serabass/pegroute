# pegroute

```
GET / as home = HomeController@index

@namespace ExpertControllers
@as experts
/experts {
  @as .index
  GET / = ExpertController@index
  
  @as .item
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
    
    @as .ordprofileers
    GET /profile = ExpertController@profile
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
