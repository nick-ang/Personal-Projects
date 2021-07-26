# router

class Router
  def initialize(controller)
    @controller = controller
    @running    = true
  end

  def run
    puts "---------------------------------"
    puts "Welcome to your DEV Pocket Reader"
    puts "---------------------------------"

    while @running
      display_tasks
      action = gets.chomp.to_i
      print `clear`
      route_action(action)
    end
  end

  private

  def route_action(action)
    case action
    when 1 then @controller.list
    when 2 then @controller.save_post
    when 3 then @controller.read
    when 4 then @controller.mark_as_read
    when 5 then @controller.destroy
    when 6 then stop
    else
      puts "Please press 1, 2, 3, 4, 5 or 6"
    end
  end

  def stop
    @running = false
  end

  def display_tasks
    puts ""
    puts "What do you want to do next?"
    puts "1 - List all posts"
    puts "2 - Save posts for later"
    puts "3 - Read a post"
    puts "4 - Mark post as read"
    puts "5 - Delete a post"
    puts "6 - Stop and exit the program"
  end
end
