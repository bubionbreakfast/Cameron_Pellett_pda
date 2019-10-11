require('minitest/rg')
require('minitest/autorun')
require_relative('../card_game')
require_relative('../card')
require('pry')


class TestCardGame < MiniTest::Test



# def test_check_for_ace()
#   card = Card.new('hearts', 1)
#   assert_equal(1, card.value())
# end

# def test_highest_card()
#   card1 = Card.new('hearts', 2)
#   card2 = Card.new('spades', 7)
#   # binding.pry
#   assert_equal(card2, highest_card(card1, card2))
# end

def test_cards_total()
  card1 = Card.new('hearts', 1)
  card2 = Card.new('spades', 2)
  card3 = Card.new('diamonds', 3)
  cards = [card1, card2, card3]
  assert_equal(6, cards_total(cards))
end

end
