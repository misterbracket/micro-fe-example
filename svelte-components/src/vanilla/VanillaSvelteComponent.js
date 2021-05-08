import SvelteComponent from "../components/SvelteComponent.svelte";

export default (selector) => {
  const app = new SvelteComponent({
    target: document.querySelector(selector),
  });

  window.app = app;
};
