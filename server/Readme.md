//cities
['get'] '<http://localhost:3001/cities>' => get all cites
['post'] '<http://localhost:3001/cities>' => save city {name, code}
['delete/:id'] '<http://localhost:3001/cities/:id>' => delete city by id {id}
['patch/:id'] '<http://localhost:3001/cities/:id>' => change city
by id {id}


//company
['post'] '<http://localhost:3001/companies>' => save companies {company_name, logo}

//flights
['post'] '<http://localhost:3001/flights>' => save flights {city_from, city_to,company,status,estimated_time} => middlewaries {getDocumentByField=>code,company_name}

//users
['get'] '<http://localhost:3001/users>' => get all users => middlewaries-token verify authenticateToken => {user}


//auth
['post'] '<http://localhost:3001/auth/sign-up>' => save authenticate => {token,refreshToken} 
['post'] '<http://localhost:3001/auth/sign-in>' => save generateTokens => {token,refreshToken} 

