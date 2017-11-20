class GamesController < ApplicationController
  def new
    chars = ("a".."z").to_a
    @letters = Array.new(10).collect{chars[rand(chars.size)]}
  end

  def score
  end
end
