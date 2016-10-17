# Personal blog hosted on Heroku using Ghost blogging platform

Thanks to https://github.com/cobyism/ghost-on-heroku for the original fork.


Procfile has `--production` flag which is needed for heroku to run. However `heroku local` doesn't work. Need to change over to node foreman and set up variables in `.env` file to fix this.
