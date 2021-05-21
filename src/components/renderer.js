export function createHostInstance(element) {
  let domNode = document.createElement(element.type);
  domNode.className = element.props?.className || "";
  domNode.innerText = element.props?.text || "";
  domNode.value = element.props?.value || "";
  return domNode;
}

export function renderNodes(root) {
  let $root = createHostInstance(root);

  if (root?.props?.children) {
    root?.props.children.forEach((el) => {
      $root.append(renderNodes(el));
    });
  }

  if (root?.props?.onClick) {
    $root.addEventListener("click", root?.props?.onClick);
  }

  return $root;
}

export function render(rootComponent, targetNode, shop) {
  const $el = document.querySelector(".container");
  if ($el) {
    $el.remove();
  }

  let component = renderNodes(rootComponent(shop));

  targetNode.append(component);
}

export function createRoot(rootComponent, targetNode, shop) {
  render(rootComponent, targetNode, shop);
}
