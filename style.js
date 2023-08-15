<script>
  // ... (le reste de votre code JavaScript)

  function updateTable() {
    // ... (votre code actuel pour mettre à jour le tableau)
  }

  addProductButton.addEventListener('click', () => {
    // Ajout d'un produit
    const productName = prompt('Nom du produit :');
    const productQuantity = parseInt(prompt('Quantité :'));
    const productPrice = parseFloat(prompt('Prix :'));

    const newRow = productTableBody.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const checkboxCell = newRow.insertCell(3);

    cell1.innerHTML = productName;
    cell2.innerHTML = productQuantity;
    cell3.innerHTML = productPrice;

    const checkbox = document.createElement('input');
    checkbox.type = 'radio';
    checkbox.name = 'productRadio';
    checkbox.value = productTableBody.rows.length - 1;
    checkbox.addEventListener('change', () => {
      selectedRowIndex = productTableBody.rows.length - 1;
    });

    checkboxCell.appendChild(checkbox);
  });

  updateProductButton.addEventListener('click', () => {
    if (selectedRowIndex !== -1) {
      // Modification d'un produit
      const row = productTableBody.rows[selectedRowIndex];
      const productName = prompt('Nom du produit :', row.cells[0].innerHTML);
      const productQuantity = parseInt(prompt('Quantité :', row.cells[1].innerHTML));
      const productPrice = parseFloat(prompt('Prix :', row.cells[2].innerHTML));

      row.cells[0].innerHTML = productName;
      row.cells[1].innerHTML = productQuantity;
      row.cells[2].innerHTML = productPrice;
    } else {
      alert('Sélectionnez un produit à modifier.');
    }
  });

  deleteProductButton.addEventListener('click', () => {
    if (selectedRowIndex !== -1) {
      // Suppression d'un produit
      productTableBody.deleteRow(selectedRowIndex);
      selectedRowIndex = -1;
    } else {
      alert('Sélectionnez un produit à supprimer.');
    }
  });

  // Mettre à jour la table au chargement de la page
  updateTable();
</script>
