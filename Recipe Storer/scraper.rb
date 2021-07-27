# service object

require 'open-uri'
require 'nokogiri'
require 'pry-byebug'
require_relative 'recipe'

class Scraper
  def initialize(keyword)
    @keyword = keyword
  end

  def fetch_recipes
    url = "https://www.allrecipes.com/search/results/?search=#{@keyword}"
    html_file = URI.open(url).read
    html_doc = Nokogiri::HTML(html_file)
    recipes = []
    html_doc.search('.card__imageContainer').first(5).each do |element|
      recipes << fetch_recipe(element) # return a recipe instance
      # recipes << element.search('.card__titleLink').attribute('href').text.strip
    end
    recipes
  end

  def fetch_recipe(recipe_card_nokogiri_element)
    # create html file
    html_file = URI.open(recipe_card_nokogiri_element.search('.card__titleLink').attribute('href').text.strip).read
    # parse with Nokogiri
    html_doc = Nokogiri::HTML(html_file)
    # search the html doc
    recipe = 0
    html_doc.search('.template-recipe').each do |element|
      import_name = element.search('.inner-container .recipe-container h1').text.strip
      import_desc = element.search('.inner-container .recipe-container .recipe-summary').text.strip
      import_rating = element.search('.recipe-reviews').first.attribute("data-ratings-average-display").value.strip.to_f
      import_preptime = element.search('.inner-container .recipe-container .recipe-meta-item:contains("prep") .recipe-meta-item-body').text.strip
      recipe = Recipe.new(import_name, import_desc, import_rating, import_preptime, false)
    end
    return recipe
  end
end
