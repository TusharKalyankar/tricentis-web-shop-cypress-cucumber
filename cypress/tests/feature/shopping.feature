Feature: Shopping on Demo Web Shop

  Scenario: Search for a product, add to cart, and checkout
    Given I open the Demo Web Shop website
    When I login the application
    When I search for a product
    And I add the product to the cart
    And I proceed to checkout
    Then I should see the order place successfully
