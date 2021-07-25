# lib/scraper.rb
require 'nokogiri'

filepath = "results.html"
# 1. Get the HTML page content
html_content = File.open(filepath)
# 2. Build a Nokogiri document from this file
doc = Nokogiri::HTML(html_content)

# 3. Search for the correct elements containing the items' title in our HTML doc
doc.search('.v2-listing-card .v2-listing-card__info .text-body').each do |element|
  # 4. For each item found, extract its title and print it
  puts element.text.strip
end
