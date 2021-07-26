# view
require 'pry-byebug'

class View
  def display(posts)
    posts.each_with_index do |post, index|
      if post.read? == "true"
        done = "[x]"
      else
        done = "[ ]"
      end
      puts "#{index + 1}. #{done} - #{post.title} (#{post.author})"
    end
  end

  def ask_user_for_path
    puts " Path"
    return gets.chomp
  end

  def ask_user_for_index
    puts "Index"
    return gets.chomp.to_i
  end
end
