(please add to this README as you see fit to make dev easier for everyone in the future 😊 😊 😊 )

A modern-ish React/Redux Single Page App, build mobile-first to provide an engaging, seamless
listening experience for most, and an engaging exploration mode for some.
#### Fire Feed Web Client
***Note:***
This page gets served locally with the node package "http-server". We therefore **need to connect to a local Rails server running the BC FIRE API**, [BC Fire Feed](www.github.com/aylanismello/bc-fire-api). See installation instructions for that separately.


## Getting started

`git clone ${repo_name}`

Follow the installation instructions to install NVM.
(not necessary, but very nice moving forward)
https://github.com/creationix/nvm

`gem install foreman`

`gem install sass`


**OSX**

`brew install yarn`

`yarn install`

`yarn add global http-server`

`foreman start`

### What is foreman start?
foreman is a task/process manager for getting all the processes you need for running fire-feed-web up and running locally.

If you peek at the `Procfile` you'll see all the processes (just BASH commands)
that we're running when we type in `foreman start`

http://blog.daviddollar.org/2011/05/06/introducing-foreman.html
