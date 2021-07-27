require 'csv'
require_relative "recipe"
require "pry-byebug"
# Repository

class Cookbook
  # attr_accessor :recipes
  def initialize(csv_file_path)
    @csv_file_path = csv_file_path
    @recipes = []
    CSV.foreach(@csv_file_path) do |row|
      @recipes << Recipe.new(row[0], row[1], row[2], row[3], row[4])
    end
  end

  def all
    return @recipes
  end

  def add_recipe(recipe)
    @recipes << recipe


    CSV.open(@csv_file_path, 'wb') do |csv|
      @recipes.each do |x|
        csv << [x.name, x.description, x.rating, x.prep_time, x.done]
      end
    end
  end

  def remove_recipe(recipe_index)
    @recipes.delete_at(recipe_index)
    CSV.open(@csv_file_path, 'wb') do |csv|
      @recipes.each do |x|
        csv << [x.name, x.description, x.rating, x.prep_time, x.done]
      end
    end
  end

  def find(index)
    @recipes[index]
  end
end
