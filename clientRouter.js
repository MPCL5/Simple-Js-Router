let routes = null;
let routeContainer = null;

function setHtml(html) {
  routeContainer.innerHTML = html;
}

function compareUrl(schema, url) {
  var schemaArray = schema.split("/");
  var urlArray = url.split("/");

  if (schemaArray.length !== urlArray.length) {
    return null;
  }

  var result = {};
  for (var i = 0; i < schemaArray.length; i++) {
    var schemaItem = schemaArray[i];
    var urlItem = urlArray[i];

    if (schemaItem[0] === ":") {
      var key = schemaItem.slice(1, schemaItem.length);
      result[key] = urlItem;

      continue;
    }

    if (schemaItem !== urlItem) {
      return null;
    }
  }

  return result;
}

function processRoutes() {
  const currentRoute = window.location.pathname;

  if (!routeContainer) return;

  if (routes[currentRoute]) {
    setHtml(routes[currentRoute]());
  } else {
    // Routes containing params
    // No match found, show 404 page:
    var is404 = true;
    for (var item in routes) {
      var values = compareUrl(item, currentRoute);
      if (values !== null) {
        setHtml(routes[item](values));
        is404 = false;
        break;
      }
    }

    if (is404) setHtml(routes[404]());
  }

  handleLinks();
}

/**
 * Add event listeners to each custom link
 */
function handleLinks() {
  const links = document.querySelectorAll("a[data-href]");
  for (const node of links) {
    node.onclick = handleLinkClick;
  }
}

function handleLinkClick(e) {
  e.preventDefault();
  if (e.currentTarget.dataset.href) {
    window.history.pushState(null, null, e.currentTarget.dataset.href);
    processRoutes();
  }
}

function handleRouteChange() {
  // handle route change when user clicks the browser's back and forward buttons
  window.onpopstate = processRoutes;
}

export function initializeRouter(routeList, container) {
  routes = routeList;
  routeContainer = container;

  processRoutes();
  handleRouteChange();
}
