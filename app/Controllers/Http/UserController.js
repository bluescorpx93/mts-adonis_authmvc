'use strict'
const User = use('App/Models/User');

class UserController {
  async createUser({ request, view, auth }){
    const userInfo = request.only(['email', 'password'])
    const user = new User()
    user.email = userInfo.email
    user.username = userInfo.email
    user.password = userInfo.password
    await user.save()
    return view.render('msgs.done', {msg : "User Created"})
  }

  async loginUser({ request, response, auth }){
    const userInfo = request.only(['email', 'password'])
    const user = await User.findByOrFail('email', userInfo.email)

    let result = await auth.attempt(user.email, userInfo.password)

    if (result){
      return response.redirect("/users")
    } else {
      return response.redirect("/login")
    }
  }

  async showUsers({ view, auth }){
    let users = await User.all()
    return view.render('user.users', {users : users.toJSON() })
  }

  async showLogin({ view }){
    return view.render('user.login')
  }

  async logoutUser({ auth, response }){
    await auth.logout()
    return response.redirect ("/login")
  }
}

module.exports = UserController
