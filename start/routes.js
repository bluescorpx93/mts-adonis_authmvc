'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.post("signup", "UserController.createUser")
Route.post("/login", "UserController.loginUser")
Route.get("/login", "UserController.showLogin")
Route.get("/logout", "UserController.logoutUser")
Route.get("/users", "UserController.showUsers").middleware('auth')
