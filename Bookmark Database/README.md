## Background & Objectives

This is a simple program that stores webpages in an SQL database using ActiveRecord so you can access your most used URLs in a common space!

To run simply run:
bundle install
app.rb
Visit http://localhost:4567/ in your browser

The current database is my own but if you want to create a new one run:
rake db:drop
rake db:drop db:create db:migrate

If you want to seed with fake urls use
rake db:seed

Have fun!
