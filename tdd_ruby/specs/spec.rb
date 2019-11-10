require('minitest/rg')
require('minitest/autorun')
require_relative('../card_game')
require_relative('../card')
require('pry')


class TestCardGame < MiniTest::Test

 def setup
    @card1 = Card.new('spades', 1)
    @card2 = Card.new('hearts', 7)

    @cards = [@card1, @card2]
  end

  def test_check_for_ace__true()
    assert_equal(true, CardGame.check_for_ace(@card1))
  end

  def test_check_for_ace__false()
    assert_equal(false, CardGame.check_for_ace(@card2))
  end

  def test_highest_card()
    result = CardGame.highest_card(@card1, @card2)
    assert_equal(@card2 , result)
  end

  def test_cards_total()
    result = CardGame.cards_total(@cards)
    assert_equal("You have a total of 8", result)
  end

end
