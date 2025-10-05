// js/activity.js
$(document).ready(function () {
  const $table = $('#activities-table');

  // Only allow clicks on selectable cells: <td class="slot">, but not if they also have .na
  $table.on('click', 'td.slot:not(.na)', function () {
    const $cell = $(this);
    $cell.toggleClass('selected');

    // (optional) accessibility hint – reflect state
    const isSelected = $cell.hasClass('selected');
    $cell.attr('aria-pressed', isSelected ? 'true' : 'false');
  });

  // Optional: keyboard support (Enter/Space) when a cell is focused
  $table.on('keydown', 'td.slot:not(.na)', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      $(this).click();
    }
  });

  // Make selectable cells focusable for keyboard nav
  $table.find('td.slot').attr('tabindex', 0);

  // Safety: ensure NA cells are never selectable
  // (even if someone accidentally left 'slot' on them)
  $table.find('td.na').removeClass('slot').attr('tabindex', -1);
});
