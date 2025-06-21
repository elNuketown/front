Feature: Realizar compra no site Sauce Demo

  Scenario: Realizar a compra com sucesso
    Given que o usuário está na página de login
    When ele realiza o login com "standard_user" e "secret_sauce"
    And ele adiciona um item ao carrinho
    And ele vai para o carrinho
    And ele vai para a página de checkout
    And ele preenche os dados de checkout com "Vinicios", "Virissimo" e "07713110"
    And ele verifica os itens no checkout
    And ele finaliza a compra
    Then ele deve ver a mensagem de agradecimento no checkout