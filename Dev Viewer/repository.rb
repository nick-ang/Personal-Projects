# repository

require 'csv'
require_relative 'post'

class Repository
  def initialize(csv_file)
    @csv_file = csv_file
    @posts = []
    CSV.foreach(@csv_file) do |row|
      @posts << Post.new(row[0], row[1], row[2], row[3], row[4])
    end
  end

  # list posts
  def all
    @posts
  end

  # save post for later
  def add(post)
    @posts << post
    CSV.open(@csv_file, 'wb') do |row|
      @posts.each do |postx|
        row << [postx.path, postx.title, postx.body, postx.author, postx.done]
      end
    end
  end

  # read a post
  def find(index)
    @posts[index]
  end

  def update(post)
    @posts << post
    CSV.open(@csv_file, 'wb') do |row|
      @posts.each do |postx|
        row << [postx.path, postx.title, postx.body, postx.author, postx.done]
      end
    end
  end

  def delete(index)
    @posts.delete_at(index - 1)
    CSV.open(@csv_file, 'wb') do |row|
      @posts.each do |post|
        row << [post.path, post.title, post.body, post.author, post.done]
      end
    end
  end
end
