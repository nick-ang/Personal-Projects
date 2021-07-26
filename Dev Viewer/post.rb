# model

class Post
  attr_reader :path, :title, :body, :author, :done

  # state
  def initialize(path, title, body, author, done)
    @path = path
    @title = title
    @body = body
    @author = author
    @done = done
  end

  # behaviour
  def read?
    @done
  end

  def mark_as_read!
    @done = "true"
  end
end
