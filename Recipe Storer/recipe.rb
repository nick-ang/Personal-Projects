# model

class Recipe
  attr_reader :name, :description, :rating, :done, :prep_time

  def initialize(name, description, rating, prep_time, done)
    @name = name
    @description = description
    @rating = rating
    @prep_time = prep_time
    @done = done
  end

  def done?
    @done
  end

  def mark_as_done!
    @done = "true"
  end
end
