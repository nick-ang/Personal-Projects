# controller

require_relative 'recipe'
require_relative 'view'
require_relative 'scraper'
require 'nokogiri'
require 'open-uri'

class Controller
  def initialize(cookbook)
    @cookbook = cookbook
    @view = View.new
  end

  def list
    display_tasks
  end

  def mark_as_read
    display_tasks
    index = @view.ask_user_for_index
    recipe = @cookbook.find(index)
    recipe.mark_as_done!
    @cookbook.add_recipe(recipe)
    @cookbook.remove_recipe(index)
  end

  def create
    name = @view.ask_user_for_name
    description = @view.ask_user_for_description
    rating = @view.ask_user_for_rating
    done = false
    recipe = Recipe.new(name, description, rating, done)
    @cookbook.add_recipe(recipe)
  end

  def destroy
    display_tasks
    recipe_index = @view.ask_user_for_index
    @cookbook.remove_recipe(recipe_index)
  end

  def import
    import_item = @view.ask_user_for_ingredient
    final_list = Scraper.new(import_item).fetch_recipes
    @view.display_final_list(final_list)
    import_index = @view.ask_user_for_index
    # Import recipe as name and description
    recipe = final_list[import_index]
    @cookbook.add_recipe(recipe)
  end

  private

  def display_tasks
    recipes = @cookbook.all
    @view.display(recipes)
  end
end
