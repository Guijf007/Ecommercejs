    function email() {
        Email.send({
          Host: "smtp.gmail.com",
          Username: "YourFood",
          Password: "123",
          To: 'testejsgui@gmail.com',
          From: "YourFood1info2023@gmail.com",
          Subject: "Pedido confirmado!",
          Body: "Aguarde a entrega do seu pedido!",
        })
          .then(function (message) {
            alert("Cheque seu email")
          });
      }
