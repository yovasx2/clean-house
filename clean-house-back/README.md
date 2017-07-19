# README

* Run a container

      $ docker-compose run back

* Ruby version

      ruby 2.4.1p111 (2017-03-22 revision 58053) [x86_64-linux]

* System dependencies

      PostgreSQL and NodeJS v0.10.29

* Database creation

      $ bundle exec rake db:create

* Database initialization

      $ bundle exec rake db:seed

* How to run the test suite

      $ bundle exec rspec

* Deployment instructions

      pending
      
**Note:** All commands should be executed with docker prefix to run them inside the container
         
    $ docker-compose run back <desired_command>
