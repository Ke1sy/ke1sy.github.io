

(function() {
  var burger = document.querySelector(".burger");
  var menu = document.querySelector("#" + burger.dataset.target);
  burger.addEventListener("click", function() {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });

  var skipLink = document.querySelector(".js-skip-link");
  var skipList = document.querySelector(".js-skip-list");
  var skipListItem = document.querySelectorAll(".js-skip-list li a");

  skipLink.addEventListener("click", function() {
    skipLink.classList.toggle("is-active");
    skipList.classList.toggle("is-active");
  });

  skipList.addEventListener("click", function() {
    skipLink.classList.remove("is-active");
    skipList.classList.remove("is-active");
  });

  addTabsKeyboardNavigation();
  initTabs()
})();


function initTabs () {
  document.querySelectorAll(".js-tab-btn").forEach(function(navEl) {
    navEl.onclick = function() {
      toggleTab(this.id, this.dataset.target);
    };
  });

  function toggleTab(selectedNav, targetId) {
    var navEls = document.querySelectorAll(".js-tab-btn");

    navEls.forEach(function(navEl) {
      if (navEl.id == selectedNav) {
        navEl.classList.add("is-active");
        navEl.setAttribute('aria-selected', 'true')
        navEl.removeAttribute('tabindex')
      } else {
        if (navEl.classList.contains("is-active")) {
          navEl.classList.remove("is-active");
          navEl.setAttribute('aria-selected', 'false')
          navEl.setAttribute('tabindex', '-1')
        }
      }
    });

    var tabs = document.querySelectorAll(".tab-pane");

    tabs.forEach(function(tab) {
      if (tab.id == targetId) {
        tab.style.display = "block";
      } else {
        tab.style.display = "none";
      }
    });
  }
}

function addTabsKeyboardNavigation () {
  var tablist = document.querySelectorAll('[role="tablist"]')[0];
  var tabs;
  var panels;

  generateArrays();

  function generateArrays () {
    tabs = document.querySelectorAll('[role="tab"]');
    panels = document.querySelectorAll('[role="tabpanel"]');
  };

  // For easy reference
  var keys = {
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    delete: 46,
    enter: 13,
    space: 32
  };

  // Add or subtract depending on key pressed
  var direction = {
    37: -1,
    38: -1,
    39: 1,
    40: 1
  };

  // Bind listeners
  for (i = 0; i < tabs.length; ++i) {
    addListeners(i);
  };

  function addListeners (index) {
    tabs[index].addEventListener('click', clickEventListener);
    tabs[index].addEventListener('keydown', keydownEventListener);
    tabs[index].addEventListener('keyup', keyupEventListener);

    // Build an array with all tabs (<button>s) in it
    tabs[index].index = index;
  };

  // When a tab is clicked, activateTab is fired to activate it
  function clickEventListener (event) {
    var tab = event.target;
    activateTab(tab, false);
  };

  // Handle keydown on tabs
  function keydownEventListener (event) {
    var key = event.keyCode;

    switch (key) {
      case keys.end:
        event.preventDefault();
        // Activate last tab
        focusLastTab();
        break;
      case keys.home:
        event.preventDefault();
        // Activate first tab
        focusFirstTab();
        break;

        // Up and down are in keydown
        // because we need to prevent page scroll >:)
      case keys.up:
      case keys.down:
        determineOrientation(event);
        break;
    };
  };

  // Handle keyup on tabs
  function keyupEventListener (event) {
    var key = event.keyCode;

    switch (key) {
      case keys.left:
      case keys.right:
        determineOrientation(event);
        break;
      case keys.delete:
        determineDeletable(event);
        break;
      case keys.enter:
      case keys.space:
        activateTab(event.target);
        break;
    };
  };

  // When a tablistвЂ™s aria-orientation is set to vertical,
  // only up and down arrow should function.
  // In all other cases only left and right arrow function.
  function determineOrientation (event) {
    var key = event.keyCode;
    var vertical = tablist.getAttribute('aria-orientation') == 'vertical';
    var proceed = false;

    if (vertical) {
      if (key === keys.up || key === keys.down) {
        event.preventDefault();
        proceed = true;
      };
    }
    else {
      if (key === keys.left || key === keys.right) {
        proceed = true;
      };
    };

    if (proceed) {
      switchTabOnArrowPress(event);
    };
  };

  // Either focus the next, previous, first, or last tab
  // depending on key pressed
  function switchTabOnArrowPress (event) {
    var pressed = event.keyCode;

    if (direction[pressed]) {
      var target = event.target;
      if (target.index !== undefined) {
        if (tabs[target.index + direction[pressed]]) {
          tabs[target.index + direction[pressed]].focus();
        }
        else if (pressed === keys.left || pressed === keys.up) {
          focusLastTab();
        }
        else if (pressed === keys.right || pressed == keys.down) {
          focusFirstTab();
        };
      };
    };
  };

  // Activates any given tab panel
  function activateTab (tab, setFocus) {
    setFocus = setFocus || true;
    // Deactivate all other tabs
    deactivateTabs();

    // Remove tabindex attribute
    tab.setAttribute('tabindex', '');

    // Set the tab as selected
    tab.setAttribute('aria-selected', 'true');

    // Set focus when required
    if (setFocus) {
      tab.focus();
    };
  };

  // Deactivate all tabs and tab panels
  function deactivateTabs () {
    for (t = 0; t < tabs.length; t++) {
      tabs[t].setAttribute('tabindex', '-1');
      tabs[t].setAttribute('aria-selected', 'false');
    };
  };

  // Make a guess
  function focusFirstTab () {
    tabs[0].focus();
  };

  // Make a guess
  function focusLastTab () {
    tabs[tabs.length - 1].focus();
  };

  // Detect if a tab is deletable
  function determineDeletable (event) {
    target = event.target;

    if (target.getAttribute('data-deletable') !== null) {
      // Delete target tab
      deleteTab(event, target);

      // Update arrays related to tabs widget
      generateArrays();

      // Activate the closest tab to the one that was just deleted
      if (target.index - 1 < 0) {
        activateTab(tabs[0]);
      }
      else {
        activateTab(tabs[target.index - 1]);
      };
    };
  };

  // Deletes a tab and its panel
  function deleteTab (event) {
    var target = event.target;
    var panel = document.getElementById(target.getAttribute('aria-controls'));

    target.parentElement.removeChild(target);
    panel.parentElement.removeChild(panel);
  };

}

