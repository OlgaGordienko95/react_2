import React, {Component} from 'react';
import style from '../css/style1.css'
import firebase from './firebase'


class Registration extends Component {
  constructor (props) {
    super (props);

  this.state = {
        userName:'Гость',
        isLogin:false,
        emailLog: '',
        passwordLog: '',
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
        logInButtonText:'Войти',
        registerButtonText:'Регистрация',
        isReg:false
    };
  }
  componentDidMount(){
    console.log("i did it");
    /*database.ref().on('value' => {
      this.setState( date:snapshot.val())
    });*/
  }

  LoginOnclick() {
    if (!this.state.isLogin){
    this.setState({isLogin:!this.state.isLogin,logInButtonText:'Выйти', isReg : false});
    this.logIn(this.state.emailLog, this.state.passwordLog);
    }
    else{
      this.setState({isLogin:!this.state.isLogin,logInButtonText:'Вoйти',userName:'Гость', isReg : false});
      this.logOut();
    }
  }

  RegOnclick(){
  console.log(this.state.isReg);
    if (!this.state.isReg){
      this.setState({isReg:!this.state.isReg, registerButtonText:'Зарегистрироваться'});
      console.log(this.state.isReg);
    }
    else{
        this.setState({isReg:!this.state.isReg, registerButtonText:'Регистрация', isLogin:true, userName: this.state.name,
      logInButtonText:'Выйти'});
      if (this.state.password === this.state.repeatPassword){
        this.createUser(this.state.email, this.state.password, this.state.name );
        console.log(this.state.name);
        console.log(this.state.isReg);
      }
    }
  }

emailLogChange (event){
  var emailEnter = event.target.value;
  this.setState({emailLog:emailEnter});
  console.log (this.emailLog);
}

passwordLogChange (event){
  var passwordEnter = event.target.value;
  this.setState({passwordLog:passwordEnter})
  console.log (passwordEnter);
}

emailChange (event){
  var emailReg = event.target.value;
  this.setState({email:emailReg})
  console.log (emailReg);
}

passwordChange (event){
  var passwordReg = event.target.value;
  this.setState({password:passwordReg})
  console.log (passwordReg);
}

repeatPasswordChange (event){
  var repeatPasswordReg = event.target.value;
  this.setState({repeatPassword:repeatPasswordReg})
  console.log (repeatPasswordReg);
}

nameChange (event){
  var nameReg = event.target.value;
  this.setState({name:nameReg})
  console.log (nameReg);
}
  initSession() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
//      userName.textContent = "Здравствуйте " + user.displayName;
      }
    });
  }

  createUser(email, password, name) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
       user.updateProfile({
            displayName: name
           })
          .then(() => this.initSession());
      })
      .catch(err => {
        console.log(err);
      });
  }

  logIn(email, password) {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then (user => {
            this.setState({userName:user.displayName});
          this.initSession();
        })
        .catch ( err => {
            console.log(err);
        });
  };
  logOut() {
      firebase
        .auth()
        .signOut()
        .catch(err => {
          console.log(err);
        });
 }

  render(){
    return (
      <div id="login">
        	<span id = "user-name">Здравствуй, {this.state.userName} !</span>
          {!this.state.isLogin?
            !this.state.isReg?
            	<form className="form-4" name ="log" id="loginForm">
                	<p>
                   	<label forhtml="email">Логин или email</label>
                   	<input type="email" onChange={this.emailLogChange.bind(this)} id = "emailLogIn" name="emailLog" placeholder="Логин или email" required/>
                	</p>
                	<p>
                    	<label forhtml="password">Пароль</label>
                    	<input type="password" onChange={this.passwordLogChange.bind(this)} id = "passwordLogIn" name='passwordLog' placeholder="Пароль" required/>
                	</p>
            	</form>
              :

            <form action="#" name="register" id="register" className="register">
                    <legend>Зарегистрироваться</legend>
                    <input id = "name" onChange={this.nameChange.bind(this)} name="name" type="text" placeholder="Name" required/>
                    <input id ="email" onChange={this.emailChange.bind(this)} name="email" type="email" placeholder="email" required/>
                    <input id = "password" onChange={this.passwordChange.bind(this)} name ="pasword" type="password" required placeholder="password"/>
                    <input id = "repeatPassword" onChange={this.repeatPasswordChange.bind(this)} name = "repeatPassword" type="repeatPassword" placeholder="repeat password" required/>

            </form>

          : ''}

          {!this.state.isReg?
            <p>
                <button id="btnLog" onClick={this.LoginOnclick.bind(this)} type="submit" name="submit">
                {this.state.logInButtonText}
                </button>
            </p>
          : ''}
          {!this.state.isLogin?
            <p>
                <button id="Reg" onClick={this.RegOnclick.bind(this)} type="submit"  name="submit">
                {this.state.registerButtonText}</button>
            </p>
            : ''}
      </div>
    )
  }
}

export default Registration;
