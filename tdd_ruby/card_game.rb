  require realtive ('card.rb')
  
  class CardGame



   def self.checkForAce(card)
     if card.value == 1
       return true
     else
       return false
     end
   end

  def highest_card(card1, card2)#typo on def keyword and missing a comma
    if card1.value > card2.value
      return card1#error in card name
    else
      return card2
    end
  end
  # end #this end is extra

  def self.cards_total(cards)
    total = 0#total needs to be initialized with a value eg 0
    for card in cards
      total += card.value
      return "You have a total of + #{total}"
    end
  end

end#missing an end statement
