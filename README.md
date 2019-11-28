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


@uses api
/api {
  @as .teacher
  /teacher {
    @as .paginate
    GET / = TeacherController@paginate
    
    @as .all
    GET / = TeacherController@all
    
    /{id} {
      @as .item
      GET / = TeacherController@item
      
      @as .comments
      GET /comments = TeacherController@comments
      
      @as .articles
      GET /articles = TeacherController@articles
      
      @as .articles
      @uses auth:api
      POST /comment = TeacherController@postComment
    }
  }
  
  @as .education-center {
    @as .paginat
    GET / = EducationCenterController@paginate
    
    /{id} {
      @as .item
      GET / = EducationCenterController@item
      
      @as .comments
      GET /comments = EducationCenterController@getComments
      
      @as .teachers
      GET /comments = EducationCenterController@getComments
      
      @as .comment
      @uses auth:api
      POST /comment = EducationCenterController@postComment
    }
  }
  
  @as .speciality {
    @as .all
    GET / = SpecialityController@all
  }
  
  @as .geo
  /geo {
  
    @as .countries
    GET /countries = GeoController@getCountries
  
    @as .cities
    GET /cities = GeoController@getCities
  }
  
  @as .article
  /article {
    @as .paginate
    GET / = ArticleController@paginate
    
    @as .all
    GET / = ArticleController@all
    
    @as .item
    @where id \d+
    GET /{id} = ArticleController@item
  }
  
  @as .solr
  /solr {
    @ as .ping {
      GET / = SolariumController@ping
    }
    @ as .search {
      GET / = SolariumController@search
    }
  }
  
  @as .comment
  @uses auth:api
  @where id \d+
  /comment/{id} {
    @as .like
    POST /like = CommentController@like
    
    @as .dislike
    POST /dislike = CommentController@dislike
  }
}




```
