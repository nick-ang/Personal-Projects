# TODO: you can build your christmas list program here!
require 'open-uri'
require 'nokogiri'
require 'csv'
# Pseudo-code:
# 1. Welcome


items = []
hash = {}
catalog = []

filepath = "gifts.csv"

CSV.foreach(filepath) do |row|
  # Here, row is an array of columns
  if row[1] == "X"
    hash[row[0]] = "X"
    items << row[0]
  else
    items << row[0]
  end
end

puts "Welcome to your Christmas gift list"
choice = "ok"
until choice == "quit"
  puts "Which action [list|add|delete|mark|idea|quit]?"
  choice = gets.chomp
  case choice
  when "list"
    # TODO: list items
    items.each do |item|
      puts "#{items.index(item) + 1} - [#{hash[item]}] #{item}"
    end
    # Goodbye
  when "quit"
    puts "Goodbye"
  when "idea"
    puts "What are you searching on Etsy?"
    article = gets.chomp

    # 1. We get the HTML page content thanks to open-uri
    html_content = URI.open("https://www.etsy.com/search?q=#{article}").read
    # 2. We build a Nokogiri document from this file
    doc = Nokogiri::HTML(html_content)

    # 3. We search for the correct elements containing the items' title in our HTML doc
    doc.search('.v2-listing-card .v2-listing-card__info .text-body').each do |element|
      # 4. For each item found, we extract its title and print it
      catalog << element
      puts "#{catalog.index(element) + 1} - #{element.text.strip}"
    end
    puts "Pick one to add to your list (give the number)"
    index = gets.chomp.to_i
    items << catalog[index - 1].text.strip
    hash[catalog[index - 1].text.strip] = " "
    save_csv(item, "true")
    # TODO: ask user an item and add it to gift list
  when "add"
    puts "Enter an item"
    item = gets.chomp
    items << item
    hash[item] = " "
    # TODO: ask user the index of item to delete and delete it
  when "mark"
    puts "Which item have you bought (give the index)?"
    index = gets.chomp.to_i
    hash[items[index - 1]] = "X"
  when "delete"
    puts "Enter the item you wish to delete"
    item = gets.chomps
    items.delete(item)
  else
    puts "Please make another choice"
  end
end

  csv_options = { col_sep: ',', force_quotes: true, quote_char: '"' }
  filepath    = 'gifts.csv'

  CSV.open(filepath, 'wb', csv_options) do |csv|
    # We had headers to the CSV
    #TODO: store each gift
    puts "saved to CSV file"
    end

(0..items.size - 1).each do |n|
  csv_options = { col_sep: ',', force_quotes: true, quote_char: '"' }
  filepath    = 'gifts.csv'

  CSV.open(filepath, 'a', csv_options) do |csv|
    # We had headers to the CSV
    csv << [items[n], hash[items[n]]]
    #TODO: store each gift
  end
end

p items
p hash
