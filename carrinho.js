document.addEventListener('DOMContentLoaded', () => {
  const formatPrice = value =>
    value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  function updateTotal() {
    let total = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
      const price = parseFloat(item.dataset.price);
      const qty = parseInt(item.querySelector('.quantity').textContent, 10);
      total += price * qty;
    });
    document.querySelector('.total-price').textContent = 'R$ ' + formatPrice(total);
  }

  document.querySelectorAll('.increment').forEach(btn =>
    btn.addEventListener('click', () => {
      const qtyEl = btn.parentElement.querySelector('.quantity');
      qtyEl.textContent = parseInt(qtyEl.textContent, 10) + 1;
      updateTotal();
    })
  );

  document.querySelectorAll('.decrement').forEach(btn =>
    btn.addEventListener('click', () => {
      const qtyEl = btn.parentElement.querySelector('.quantity');
      const current = parseInt(qtyEl.textContent, 10);
      if (current > 1) qtyEl.textContent = current - 1;
      updateTotal();
    })
  );

  document.querySelectorAll('.delete').forEach(btn =>
    btn.addEventListener('click', () => {
      btn.closest('.cart-item').remove();
      updateTotal();
    })
  );

  document.querySelector('.back').addEventListener('click', () => window.history.back());

  updateTotal();
});
