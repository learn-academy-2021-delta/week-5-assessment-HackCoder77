# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']

# def particular
# result = beverages_array.select {|item| item.include?("o")}
# p result
# end


letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# def particular
# result = beverages_array.select {|item| item.include?("t")}
# p result
# end

def particular array,letter
    array.select do |value|
    value.include?(letter)
    end
end
p particular(beverages_array,letter_o)
p particular(beverages_array,letter_t)



# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

total = nums_array1.sum
p total


nums_array2 = [25, 17, 47, 11]
# Expected output: 100

total = nums_array2.sum
p total


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(10) => 20
# Expected output example: my_bike.brake(25) => 0

class Bike
    def initialize(wheels, model, current_speed)
        @current_speed = 0
        @wheels = 2
        @model = 'BMX'
    end

    def pedal_faster
         @current_speed += 10
     end 

    def brake
         @current_speed -= 10
         @current_speed.clamp(0, 50)

     end

    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} MPH." 
    end
end

flying = Bike.new(2 ,'BMX' ,10)

puts flying.bike_info
  



