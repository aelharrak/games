/**
 * Counting Cards
 * In the casino game Blackjack, a player can gain an advantage over the house by keeping track 
 * of the relative number of high and low cards remaining in the deck. This is called Card Counting.
 * Having more high cards remaining in the deck favors the player. Each card is assigned a value according 
 * to the table below. When the count is positive, the player should bet high. When the count is zero or negative,
 *  the player should bet low.
 * Count | Change Cards 
 * +1    |  2, 3, 4, 5, 6
 *  0    |	7, 8, 9
 * -1    |	10, 'J', 'Q', 'K', 'A'
 * 
 */
var count = 0;

function CountingCards(card) {
  if(card >= 2 && card < 7) {
    ++count;
  } else if(card >= 7 && card < 10){
    count += 0;
  } else {
    --count;
  }
  return withSuffix(count);
}

function withSuffix(count) {
  return count > 0 ? count + ' Bet': count +' Hold';
}

// Note: Only the last will display
CountingCards(2); CountingCards('J'); CountingCards(9); CountingCards(2); CountingCards(7); 5 
CountingCards(2); CountingCards(3); CountingCards(7); CountingCards('K'); CountingCards('A');