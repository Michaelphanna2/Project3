const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(
    new GoogleStrategy({
    //options for the google strategy
    callbackURL: '/auth/google/redirect',
    clientID: '915509958935-lfmah8cpse2lvileh3dja0u9scsvdc0r.apps.googleusercontent.com',
    clientSecret: 'M-HhaqfY8fRzOdqWGZ4n1xag',
}, (accessToken, refreshToken, profile, done) => {
  console.log("test");
  if (username === 'username') {
      return done(null, { name: "test", id: '1234'});
  } else {
      return done(null, false, { message: 'Incorrect cred.' });
  }
})
)
