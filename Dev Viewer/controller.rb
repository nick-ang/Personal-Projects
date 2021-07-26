# controller

require_relative 'post'
require_relative 'view'
require 'nokogiri'
require 'open-uri'

class Controller
  def initialize(repository)
    @repository = repository
    @view = View.new
  end

  def list
    display_posts
  end

  def display_posts
    # runs the .all method from the repository instance
    # which returns an array stored as posts
    posts = @repository.all
    # runs the .display method from the new view instance
    # created on line 9 receives the post array as an argument
    @view.display(posts)
  end

  def save_post
    # sets path by running the .ask_user_path instance method
    # from the new view instance
    path = @view.ask_user_for_path
    done = false
    # get title
    doc = Nokogiri::HTML(URI.open("https://dev.to/#{path}", "Accept-Language" => "en-US").read)
    title = doc.search('h1').text.strip
    # get body
    doc = Nokogiri::HTML(URI.open("https://dev.to/#{path}", "Accept-Language" => "en-US").read)
    body = doc.search('p').text.strip
    # get author
    doc = Nokogiri::HTML(URI.open("https://dev.to/#{path}", "Accept-Language" => "en-US").read)
    author = doc.search('h3:contains("More from") a').text.strip
    # create a new instance of a post
    post = Post.new(path, title, body, author, done)
    # add new post instance to repo
    @repository.add(post)
  end

  def read
    index = @view.ask_user_for_index
    post = @repository.find(index - 1)
    puts post.body
  end

  def mark_as_read
    display_posts
    index = @view.ask_user_for_index
    post = @repository.find(index - 1)
    post.mark_as_read!
    @repository.delete(index)
    @repository.update(post)
  end

  def destroy
    display_posts
    index = @view.ask_user_for_index
    @repository.delete(index)
  end
end
