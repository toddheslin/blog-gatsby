module.exports = {

  contact: (req,res) => {
    res.redirect('/blog/contact');
  },

  bio: (req,res) => {
    res.redirect('/blog/bio');
  },

  hire: (req,res) => {
    res.redirect('/blog/hire');
  },

  now: (req,res) => {
    res.redirect('/blog/now');
  }

}
