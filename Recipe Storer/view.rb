# view
class View
  def display(recipes)
    puts "------------------------------------------------------------------"
    recipes.each_with_index do |recipe, index|
      if recipe.done? == "true"
        done = "[x]"
      else
        done = "[ ]"
      end
      puts "#{index + 1} : #{done}, #{recipe.name} (#{recipe.rating}/5 #{recipe.prep_time})"
    end
    puts "------------------------------------------------------------------"
  end

  def display_final_list(recipes)
    recipes.each_with_index do |recipe, index|
      if recipe.done? == "true"
        done = "[x]"
      else
        done = "[ ]"
      end
      puts "#{index + 1} : #{done}, #{recipe.name} (#{recipe.rating}/5 #{recipe.prep_time})"
    end
  end

  def ask_user_for_name
    puts "Please enter the recipe name"
    return gets.chomp
  end

  def ask_user_for_description
    puts "Please enter the description"
    return gets.chomp
  end

  def ask_user_for_index
    puts "Please enter the index for your choice"
    return gets.chomp.to_i - 1
  end

  def ask_user_for_rating
    puts "Please enter a rating? (0-5)"
    return gets.chomp
  end

  def ask_user_for_ingredient
    puts "What ingredient would you like a recipe for?"
    return gets.chomp
  end
end
